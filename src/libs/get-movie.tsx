// export default async function getMovie () {
//     // await new Promise(resolve => setTimeout(resolve, 10000))
//     const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=1`, 
//     { 
//         cache: "no-store"
//     })

//     if(!res.ok) throw new Error("Failed to fetch data")

//     return res.json()
// }