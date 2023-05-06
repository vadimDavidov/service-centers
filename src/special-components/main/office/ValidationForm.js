import styles from './ValidationForm.module.css';
import Link from 'next/link';
import Image from 'next/image';

function ValidationForm(props) {
  return (
    <div className="container">
      <div className={styles.header}>
        <h1>Вход в личный кабинет</h1>
      </div>
      <div className={styles.form}>
        <div className={styles.inputGroup}>
          <span>
            <Image width={24} height={24} src="/icons/at.svg" />
          </span>
          <input placeholder={props.textEmail} type="email" />
        </div>
        <div className={styles.inputGroup}>
          <span>
            <Image width={24} height={24} src="/icons/password.svg" />
          </span>
          <input placeholder={props.textPassword} type="password" />
        </div>

        <button>Войти</button>
        <div className={styles.subform}>
          <Link href="#">Восстановление пароля</Link>
          <span>.</span>
          <Link href="/cities/krasnodar/office/register">Регистрация</Link>
        </div>
      </div>
    </div>
  );
}

export default ValidationForm;
