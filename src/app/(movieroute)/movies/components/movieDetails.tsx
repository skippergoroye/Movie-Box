import { Credits, Movies } from "@/types";
import { Calendar, ChevronRight, Clock3, Eye, List, Star } from "lucide-react";



interface MovieDetailsProps {
  movie: any;
  credits: Credits;
  similar: Movies;
}



export default function MovieDetails({ credits, similar, movie}: MovieDetailsProps) {
  
  return (
    <div>movieDetails</div>
  )
}

