import styles from './RegisterComplete.module.css';

function RegisterComplete() {
  return (
    <div className="container">
      <div className={styles.header}>
        <h1>Добавление сервисного центра, шаг 3 из 3</h1>
      </div>
      <div className={styles.subtitle}>
        <h3>Аккаунт</h3>
      </div>
      <form className={styles.form} action="POST">
        <label htmlFor="email">Email</label>
        <input id="email" type="email" />
        <label htmlFor="name">Имя</label>
        <input id="name" type="text" />
        <label htmlFor="password">Пароль</label>
        <input id="password" type="password" />
        <label htmlFor="password2">Пароль еще раз</label>
        <input id="password2" type="password" />
        <div className={styles.checkbox}>
          <input id="checkbox" type="checkbox" />
          <label htmlFor="checkbox">Получать рассылки с промо-акциями?</label>
        </div>
        <button type="submit">Завершить регистрацию</button>
      </form>
    </div>
  );
}

export default RegisterComplete;
