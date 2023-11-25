export default async function getSimilar(movieId: number) {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=1`)

  if(!res.ok){
    throw new Error("Failed to get similar mivies")
  }

  return res.json()
}
