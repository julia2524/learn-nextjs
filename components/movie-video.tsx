import { API_KEY, BASE_URL } from "../app/(home)/page";

async function getVideo(id: string) {
  const API_URL = `${BASE_URL}/${id}/videos?api_key=${API_KEY}`;
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}

export default async function MovieVideos({ id }: { id: string }) {
  const video = await getVideo(id);
  return <h6>{JSON.stringify(video)}</h6>;
}
