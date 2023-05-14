import styles from './TopbarDropdown.module.css';
import Link from 'next/link';

function TopbarDropdown({ onClose, route }) {
  return (
    <div className="container">
      <div className={styles.dropdown}>
        <Link onClick={onClose} href={`/setups/validation`}>
          Вход в личный кабинет
        </Link>
        <Link href="/setups/validation/registration-one">
          Добавить сервис-центр
        </Link>
      </div>
    </div>
  );
}

export default TopbarDropdown;
