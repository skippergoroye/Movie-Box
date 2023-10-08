import { Movies } from "@/types"



// Using Bearer token
export default async function fetchImageApi(url: string) {
    try {
        const options = {
            method: "GET",
            headers: {
                accept: "application/json",
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNTQ4Zjg3YjZkYmEyMDE2MjgzNzc0ZDM2NTExY2I1OSIsInN1YiI6IjYzZDNkNzUwYTQxMGM4MTFmOWUwZTlmYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dPsblQeGOtbbqrkcS01ox0gzKl6uolBFJ6nFF5KEGaM'
            }
        }


        const response = await fetch(url, options)

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data
       
    } catch (error) {
        console.error('Error:', error);
    }
}
