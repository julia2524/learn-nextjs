import { IMG_PATH } from "./movie";
import styles from "../styles/movie-info.module.css";
import Link from "next/link";
import { API_KEY, BASE_URL } from "../app/constants";

export async function getMovieInfo(id: string) {
  const API_URL = `${BASE_URL}/${id}?api_key=${API_KEY}`;
  const response = await fetch(API_URL);

  const json = await response.json();
  return json;
}

export default async function MovieInfo({ id }: { id: string }) {
  const movieInfo = await getMovieInfo(id);
  return (
    <div className={styles.container}>
      <img
        className={styles.poster}
        src={`${IMG_PATH}${movieInfo.poster_path}`}
        alt={movieInfo.title}
      />
      <div className={styles.info}>
        <h1 className={styles.title}>{movieInfo.title}</h1>
        <h3>⭐️ {movieInfo.vote_average.toFixed(1)}</h3>
        <p>{movieInfo.overview}</p>

        {movieInfo.homepage !== "" && (
          <a href={movieInfo.homepage} target="_blank">
            Homepage &rarr;
          </a>
        )}
        <Link href={`/movies/${id}/credits`}>Credits &rarr;</Link>
        <Link href={`/movies/${id}/similar`}>Similar &rarr;</Link>
      </div>
    </div>
  );
}
