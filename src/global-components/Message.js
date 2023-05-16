import styles from './Message.module.css';
import Header from './Header';

function Message() {
  return (
    <div className={styles.message}>
      <Header>Добро пожаловать в гид по сервисным центрам России!</Header>
      <h2>Выберите город, пожалуйта.</h2>
    </div>
  );
}

export default Message;
