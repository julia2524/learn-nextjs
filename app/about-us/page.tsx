import styles from "../../styles/about-us.module.css";

export const metadata = {
  title: "About Us",
};

export default function AboutUs() {
  return (
    <div className={styles.container}>
      <p>Welcome to the Movie App!</p>
      <p>
        This web application allows users to explore movies, watch trailers,
        check ratings, and discover similar films.
      </p>

      <p>
        It was built using Next.js and the TMDB API as part of a learning
        project to practice modern frontend development.
      </p>

      <p>Movie data is provided by TMDB.</p>
      <p>&copy; 2026 Song. Built with Next.js and TMDB API.</p>
    </div>
  );
}
