"use client";

import React, { useState, useEffect } from "react";
import Logo from "@/components/Navbar/logo";
import Container from "../Ui/container";
import Image from "next/image";
import SearchInput from "./searchInput";
// import Signsvg from "@/"

export default function Navbar() {
  const [isPageScrolled, setisPageScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 30) {
        setisPageScrolled(true);
      } else {
        setisPageScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`z-10 w-full fixed ${isPageScrolled && "glassmorphism"}`}
    >
      <Container>
        <div className="flex items-center w-full py-4 justify-between">
          <Logo textcolor="text-white" />
          <SearchInput />
          <div className="flex items-center gap-6">
            <p className="font-medium text-white">Sign in</p>
            <div className="bg-rose-700 rounded-full p-2">
              <Image
                width={24}
                height={24}
                alt="Menu"
                src="/images/menu.svg"
              />
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
