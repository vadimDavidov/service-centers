'use client';
import styles from './Message.module.css';
// import CommonMap from './CommonMap';

function Message() {
  return (
    <>
      <div className={styles.message}>
        <h1>Добро пожаловать в гид по сервисным центрам России!</h1>
        <h2>Выберите город, пожалуйта.</h2>
      </div>
      {/* <div className={styles.map}>
        <CommonMap />
      </div> */}
    </>
  );
}

export default Message;
