import styles from './ValidationForm.module.css';
import Link from 'next/link';
import Image from 'next/image';

function ValidationForm({ textEmail, textPassword }) {
  return (
    <div className="container">
      <div className={styles.header}>
        <h1>Вход в личный кабинет</h1>
      </div>
      <div className={styles.form}>
        <div className={styles.inputGroup}>
          <span>
            <Image width={24} height={24} src="/icons/at.svg" alt="icon" />
          </span>
          <input placeholder={textEmail} type="email" />
        </div>
        <div className={styles.inputGroup}>
          <span>
            <Image
              width={24}
              height={24}
              src="/icons/password.svg"
              alt="icon"
            />
          </span>
          <input placeholder={textPassword} type="password" />
        </div>

        <button>Войти</button>
        <div className={styles.subform}>
          <Link href="/setups/validation/password-recovery">
            Восстановление пароля
          </Link>
          <span>.</span>
          <Link href={`/setups/validation/registration-one`}>Регистрация</Link>
        </div>
      </div>
    </div>
  );
}

export default ValidationForm;
