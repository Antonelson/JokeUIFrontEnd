import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./JokeCard.module.css";

export default function JokeCard() {
  const { id } = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    async function fetchwhole() {
      let res = await fetch(
        `https://official-joke-api.appspot.com/jokes/${id}`
      );
      setData(await res.json());
    }

    fetchwhole();
  }, [id]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <h1 className={styles.setup}>{data?.setup}</h1>
        <h3 className={styles.punchline}>{data?.punchline}</h3>
      </div>
    </div>
  );
}