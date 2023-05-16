import styles from './Confirmation.module.css';
import Header from '@/global-components/Header';
import LinkButton from '@/global-components/LinkButton';

function Confirmation() {
  return (
    <>
      <Header>Успешное подтверждение регистрации</Header>
      <div className={styles.message}>
        <p>
          Вы успешно подтвердили регистрацию на нашем сайте. Добро пожаловать!
        </p>
        <p>Сейчас вы можете заполнить информацию о сервисном центре</p>
      </div>
      <div className={styles.continue}>
        <LinkButton href="#">Продолжить</LinkButton>
      </div>
    </>
  );
}

export default Confirmation;
