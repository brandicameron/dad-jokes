import styles from './JokeHistory.module.css';
import { useGetJoke } from '../../hooks/useGetJoke';

import { v4 as uuidv4 } from 'uuid';

export default function JokeHistory() {
  const { jokeHistory } = useGetJoke();

  return (
    <article className={styles.jokeHistory}>
      <h1>Old Dad Jokes</h1>
      <ul>
        {jokeHistory.map((joke) => (
          <li key={uuidv4()}>{joke.joke}</li>
        ))}
      </ul>
    </article>
  );
}
