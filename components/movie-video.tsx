import { API_KEY, BASE_URL } from "../app/(home)/page";
import styles from "../styles/movie-videos.module.css";

async function getVideo(id: string) {
  const API_URL = `${BASE_URL}/${id}/videos?api_key=${API_KEY}`;
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideo(id);
  return (
    <div className={styles.container}>
      {videos.results.map((video) => (
        <iframe
          key={video.id}
          src={`https://youtube.com/embed/${video.key}`}
          title={video.name}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ))}
    </div>
  );
}
