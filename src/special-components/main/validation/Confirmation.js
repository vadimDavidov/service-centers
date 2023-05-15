import Link from 'next/link';
import styles from './Confirmation.module.css';

function Confirmation() {
  return (
    <div className="container">
      <div className={styles.header}>
        <h1>Успешное подтверждение регистрации</h1>
      </div>
      <div className={styles.message}>
        <p>
          Вы успешно подтвердили регистрацию на нашем сайте. Добро пожаловать!
        </p>
        <p>Сейчас вы можете заполнить информацию о сервисном центре</p>
      </div>
      <div className={styles.continue}>
        <Link href="#">Продолжить</Link>
      </div>
    </div>
  );
}

export default Confirmation;
