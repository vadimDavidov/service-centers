import styles from './Counter.module.css';

function Counter() {
  return (
    <div className={styles.wrapper}>
      <section className={styles.counter}>
        <div className={styles.left}>
          <span className={styles.amount}>10 781 941 </span>
          клиент нашли подходящий сервисный центр
        </div>
        <div className={styles.border}></div>
        <div className={styles.right}>
          <p>
            <span className={styles.amount}>233 </span>
            города
          </p>
          <p>
            <span className={styles.amount}>34 770 </span>
            сервисных центров
          </p>
          <p>
            <span className={styles.amount}>229 403 </span>
            обращения
          </p>
        </div>
      </section>
    </div>
  );
}

export default Counter;
