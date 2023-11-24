export default async function getMovie (movieId: number) {
    // await new Promise(resolve => setTimeout(resolve, 10000))
    const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=1`)

    if(!res.ok) throw new Error("Cannot get movie details")

    return res.json()
}