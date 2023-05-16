import styles from './PasswordRecovery.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/global-components/Header';

function PasswordRecovery() {
  return (
    <>
      <Header>Восстановление пароля</Header>
      <div className={styles.wrapper}>
        <div className={styles.messageOne}>
          <p>Введите email, который вы указали при регистрации:</p>
        </div>
        <form className={styles.form} action="POST">
          <div className={styles.inputGroup}>
            <span>
              <Image width={20} height={20} alt="icon" src="/icons/at.svg" />
            </span>
            <input type="email" placeholder="Ваш email" />
          </div>
          <button type="submit">Продолжить</button>
        </form>
        <div className={styles.messageTwo}>
          <p>
            Не помните email и хотите восстановить доступ к управлению сервисным
            центром? <Link href="#">Найдите</Link> свою компанию в каталоге и
            нажмите кнопку "Восстановить доступ" на той странице.
          </p>
        </div>
        <div className={styles.messageThree}>
          <p>
            Или воспользуйтесь
            <Link href="/setups/feedback">службой поддержки</Link> .
          </p>
        </div>
      </div>
    </>
  );
}

export default PasswordRecovery;
