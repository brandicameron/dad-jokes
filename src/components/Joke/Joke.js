import styles from './Joke.module.css';

export default function Joke({ joke }) {
  return (
    <main className={styles.jokeContainer}>
      <h1>{joke}</h1>
    </main>
  );
}
