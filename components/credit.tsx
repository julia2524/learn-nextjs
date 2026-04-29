import { IMG_PATH } from "./movie";
import styles from "../styles/credit.module.css";
interface ICharProps {
  name: string;
  char: string;
  profile_path: string;
}

export default function Credit({ name, char, profile_path }: ICharProps) {
  console.log(`${IMG_PATH}${profile_path}`);

  return (
    <div className={styles.credit}>
      <img
        src={profile_path ? `${IMG_PATH}${profile_path}` : "/no-image.png"}
        alt={name}
      />
      <div>
        <h1>{name}</h1>
        <h3>{char}</h3>
      </div>
    </div>
  );
}
