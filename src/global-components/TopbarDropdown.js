import '../app/globals.css';
import styles from './TopbarDropdown.module.css';
import Link from 'next/link';

function TopbarDropdown() {
  return (
    <div className={styles.dropdown}>
      <Link href="/cities/krasnodar/office">Вход в личный кабинет</Link>
      <Link href="#">Добавить сервис-центр</Link>
    </div>
  );
}

export default TopbarDropdown;
