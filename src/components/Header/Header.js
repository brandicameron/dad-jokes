import styles from './Header.module.css';
import LogoText from '../../assets/dad-jokes-text.svg';
import Dad1 from '../../assets/dad-1.png';
import Dad2 from '../../assets/dad-2.png';
import Dad3 from '../../assets/dad-3.png';
import HistoryIcon from '../../assets/history.svg';

export default function Header({ handleShowHistory }) {
  return (
    <header className={styles.header}>
      <a href='/' className={styles.logo} aria-label='Go back home.'>
        <img className={styles.dad1} src={Dad1} width={90} height={196} alt='' />
        <img className={styles.dad2} src={Dad2} width={86} height={233} alt='' />
        <img className={styles.logoText} src={LogoText} width={300} height={165} alt='' />
        <img className={styles.dad3} src={Dad3} width={203} height={121} alt='' />
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
