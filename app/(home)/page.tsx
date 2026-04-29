import Movie from "../../components/movie";
import styles from "../../styles/home.module.css";
import { API_KEY, BASE_URL } from "../constants";

export const metadata = {
  title: "Home",
};
const API_URL = `${BASE_URL}/popular?api_key=${API_KEY}`;
async function getMovies() {
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div className={styles.container}>
      {movies.results.map((movie) => (
        <Movie
          key={movie.id}
          title={movie.title}
          id={movie.id}
          poster_path={movie.poster_path}
        />
      ))}
    </div>
  );
}
