import styles from './Header.module.css';
import LogoText from '../../assets/dad-jokes-text.svg';
import Dad1 from '../../assets/dad-1.png';
import Dad2 from '../../assets/dad-2.png';
import Dad3 from '../../assets/dad-3.png';
import HistoryIcon from '../../assets/history.svg';

export default function Header({ handleShowHistory }) {
  return (
    <header className={styles.header}>
      <a href='/' className={styles.logo}>
        <img className={styles.dad1} src={Dad1} alt='Dad Jokes' />
        <img className={styles.dad2} src={Dad2} alt='Dad Jokes' />
        <img className={styles.logoText} src={LogoText} alt='Dad Jokes' />
        <img className={styles.dad3} src={Dad3} alt='Dad Jokes' />
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
