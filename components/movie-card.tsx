import { API_KEY, BASE_URL } from "../app/(home)/page";
import { IMG_PATH } from "./movie";
import styles from "../styles/movie-info.module.css";
import Link from "next/link";

interface IMovie {
  poster_path: string;
  title: string;
  id: number;
}
interface IMovieCardProps {
  movie: IMovie;
}
async function getMovieInfo(id: string) {
  const API_URL = `${BASE_URL}/${id}?api_key=${API_KEY}`;
  const response = await fetch(API_URL);

  const json = await response.json();
  return json;
}

export default async function MovieCard({ movie }: IMovieCardProps) {
  const movieCard = await getMovieInfo(String(movie.id));
  return (
    <div className={styles.container}>
      <img
        className={styles.poster}
        src={`${IMG_PATH}${movieCard.poster_path}`}
        alt={movieCard.title}
      />
      <div className={styles.info}>
        <h1 className={styles.title}>{movieCard.title}</h1>
        <h3>⭐️ {movieCard.vote_average.toFixed(1)}</h3>
        <p>{movieCard.overview}</p>
        <Link href={`/movies/${movieCard.id}`}>Detail &rarr;</Link>
      </div>
    </div>
  );
}
