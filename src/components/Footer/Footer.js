import styles from './Footer.module.css';
import moreBtnPress from '../../assets/btn-press.svg';
import MoreBtnText from '../../assets/more.svg';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <button className={styles.moreBtn}>
        <img className={styles.moreBtnPress} src={moreBtnPress} alt='' />
        <img className={styles.moreBtnText} src={MoreBtnText} alt='Get another joke.' />
      </button>
    </footer>
  );
}
