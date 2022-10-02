import styles from './JokeHistory.module.css';
import { useGetJoke } from '../../hooks/useGetJoke';

import { v4 as uuidv4 } from 'uuid';

export default function JokeHistory({ showHistory, handleShowHistory }) {
  const { jokeHistory } = useGetJoke();

  return (
    <article
      className={showHistory ? `${styles.jokeHistory} ${styles.open}` : `${styles.jokeHistory}`}
    >
      <button
        onClick={handleShowHistory}
        className={styles.closeBtn}
        type='button'
        aria-label='Close'
      >
        &#8594;
      </button>
      <h2>Old Dad Jokes</h2>
      <ul>
        {jokeHistory.map((joke) => (
          <li key={uuidv4()}>{joke.joke}</li>
        ))}
      </ul>
    </article>
  );
}
