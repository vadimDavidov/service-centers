import '../app/globals.css';
import styles from './Message.module.css';

function Message() {
  return (
    <div className={styles.message}>
      <h1>Добро пожаловать в гид по сервисным центрам России!</h1>
      <h2>Выберите город, пожалуйта.</h2>
    </div>
  );
}

export default Message;
