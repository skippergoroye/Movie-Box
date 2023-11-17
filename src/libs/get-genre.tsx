import { GenreMap } from "@/constants/genres";


export function getGenreNames(genres: number[]) {
    let genreNames: string[] = [];
    genres.forEach((genre) => {
      genreNames.push(GenreMap[genre]);
    });
    console.log(genreNames)
    return genreNames;
}