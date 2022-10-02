import styles from './Joke.module.css';

import { useGetJoke } from '../../hooks/useGetJoke';

export default function Joke() {
  const { joke } = useGetJoke();

  return (
    <main className={styles.jokeContainer}>
      <h1>{joke}</h1>
    </main>
  );
}
