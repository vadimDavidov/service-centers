import styles from './Suggestions.module.css';
import LinkToPage from './LinkToPage';

function Suggestions() {
  return (
    <div className={styles.wrapper}>
      <section className={styles.suggestions}>
        <div className="container">
          <div className={styles.suggestions}>
            <span className={styles.title}>
              Ремонт и обслуживание для юридических лиц
            </span>
            <span className={styles.text}>
              Рекомендуем обращаться только к надёжным и проверенным сервисным
              центрам.
            </span>
            <div className={styles.link}>
              <LinkToPage href="#">Смотреть перечень партнёров </LinkToPage>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Suggestions;
