export interface MoviesResult {
    map: any;
    adult: boolean,
    backdrop_path: string,
    genre_ids: number[],
    id: number,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number,
}




export interface Movies {
    page: number,
    results: MoviesResult[]
}





export interface Genre {
    id: number;
    name: string;
}













