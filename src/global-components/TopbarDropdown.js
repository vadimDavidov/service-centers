import styles from './TopbarDropdown.module.css';
import Link from 'next/link';

function TopbarDropdown(props) {
  return (
    <div className={styles.dropdown}>
      <Link onClick={props.onClose} href="/cities/krasnodar/office">
        Вход в личный кабинет
      </Link>
      <Link href="#">Добавить сервис-центр</Link>
    </div>
  );
}

export default TopbarDropdown;
