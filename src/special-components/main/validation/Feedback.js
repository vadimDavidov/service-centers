import styles from './Feedback.module.css';

function Feedback() {
  return (
    <div className="container">
      <div className={styles.header}>
        <h1>Обратная связь</h1>
      </div>
      <div className={`hidden ${styles.alert}`}>
        <p>
          Ваше сообщение успешно отправлено! Если оно требует ответа, мы
          свяжемся с вами в ближайшее время.
        </p>
      </div>
      <div className={styles.info}>
        <p>
          Обратите внимание, что вы пишете не в сервисный центр, а администрации
          сайта Service-Centers.ru. Если у вас есть вопрос к сервисному центру,
          то найдите его в списке и нажмите кнопку "Написать сообщение".
        </p>
      </div>
      <form className={styles.form} action="POST">
        <label htmlFor="theme">Тема</label>
        <input id="theme" type="text" />
        <label htmlFor="message">Сообщение</label>
        <textarea id="message" type="text" rows={4} />
        <label htmlFor="name">Имя</label>
        <input id="name" type="text" />
        <label htmlFor="email">Email</label>
        <input id="email" type="email" />
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
}

export default Feedback;
