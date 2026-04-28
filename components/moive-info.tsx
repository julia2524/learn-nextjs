import { API_KEY, BASE_URL } from "../app/(home)/page";

async function getMovieInfo(id: string) {
  const API_URL = `${BASE_URL}/${id}?api_key=${API_KEY}`;
  const response = await fetch(API_URL);

  const json = await response.json();
  return json;
}

export default async function MovieInfo({ id }: { id: string }) {
  const movieInfo = await getMovieInfo(id);
  return <h6>{JSON.stringify(movieInfo)}</h6>;
}
