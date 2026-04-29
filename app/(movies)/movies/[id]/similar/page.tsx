import MovieCard from "../../../../../components/movie-card";
import styles from "../../../../../styles/movie-similar.module.css";
import { API_KEY, BASE_URL } from "../../../../constants";
export const metadata = {
  title: "Similar",
};

async function getSimilar(id: string) {
  const API_URL = `${BASE_URL}/${id}/similar?api_key=${API_KEY}`;
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}

export default async function Similar({
  params: { id },
}: {
  params: { id: string };
}) {
  const similar = await getSimilar(id);
  return (
    <div className={styles.container}>
      {similar.results.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
