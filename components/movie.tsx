import Link from "next/link";
import styles from "../styles/movie.module.css";
interface IMovieProps {
  title: string;
  id: number;
  poster_path: string;
}

export const IMG_PATH = "https://image.tmdb.org/t/p/w500";
export default function Movie({ title, id, poster_path }: IMovieProps) {
  return (
    <div className={styles.movie}>
      <img src={`${IMG_PATH}${poster_path}`} alt={title} />
      <Link href={`/movies/${id}`}>{title}</Link>
    </div>
  );
}
