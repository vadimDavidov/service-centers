import styles from './PopularServices.module.css';
import LinkToPage from './LinkToPage';

function PopularServices({ popularServicesData }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Популярные услуги по ремонту</div>
      <div className="container">
        <ul className={styles.services}>
          {
            // * Getting data
            popularServicesData.map(item => {
              return (
                <li className={styles.card}>
                  <div className={styles.cardTitle}>{item.title}</div>
                  <div className={styles.cardList}>{item.itemsList}</div>
                </li>
              );
            })
          }
        </ul>
        <div>
          <LinkToPage href="#"> Все услуги</LinkToPage>
        </div>
      </div>
    </div>
  );
}

export default PopularServices;
