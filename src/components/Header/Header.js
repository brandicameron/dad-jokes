import styles from './Header.module.css';
import { useState, useEffect } from 'react';
import LogoText from '../../assets/dad-jokes-text.svg';
import Dad1 from '../../assets/dad-1.png';
import Dad2 from '../../assets/dad-2.png';
import Dad3 from '../../assets/dad-3.png';
import HistoryIcon from '../../assets/history.svg';

export default function Header({ handleShowHistory, joke }) {
  const [makeDadsLaugh, setMakeDadsLaugh] = useState(false);

  useEffect(() => {
    setMakeDadsLaugh(true);
    let timer = setTimeout(() => {
      setMakeDadsLaugh(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [joke]);

  return (
    <header className={styles.header}>
      <a href='/' className={styles.logo} aria-label='Go back home.'>
        <img
          className={makeDadsLaugh ? `${styles.dad1} ${styles.laughing}` : `${styles.dad1}`}
          src={Dad1}
          width={90}
          height={196}
          alt=''
        />
        <img
          className={makeDadsLaugh ? `${styles.dad2} ${styles.laughing}` : `${styles.dad2}`}
          src={Dad2}
          width={86}
          height={233}
          alt=''
        />
        <img className={styles.logoText} src={LogoText} width={300} height={165} alt='' />
        <img
          className={makeDadsLaugh ? `${styles.dad3} ${styles.laughing}` : `${styles.dad3}`}
          src={Dad3}
          width={203}
          height={121}
          alt=''
        />
      </a>
      <button
        onClick={handleShowHistory}
        className={styles.historyBtn}
        aria-label='Click to View Joke History'
      >
        <img src={HistoryIcon} alt='' />
      </button>
    </header>
  );
}
