export default async function getVideo (movieId: number) {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${process.env.TMDB_API_KEY}&language=en-US`)

    if (!res.ok) {
        throw new Error('Cannot get movie videos')
    }

    return res.json()
}


