import { API_KEY, BASE_URL } from "../../../../(home)/page";
import Credit from "../../../../../components/credit";
import styles from "../../../../../styles/credits.module.css";

export const metadata = {
  title: "Credits",
};

async function getCredits(id: string) {
  const API_URL = `${BASE_URL}/${id}/credits?api_key=${API_KEY}`;
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}

export default async function Credits({
  params: { id },
}: {
  params: { id: string };
}) {
  const credits = await getCredits(id);
  return (
    <div className={styles.container}>
      {credits.cast.map((credit) => (
        <Credit
          key={credit.id}
          name={credit.name}
          char={credit.character}
          profile_path={credit.profile_path}
        />
      ))}
    </div>
  );
}
