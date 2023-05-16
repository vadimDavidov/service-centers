import styles from './Manufacturers.module.css';
import Link from 'next/link';
import Image from 'next/image';
import LinkToPage from './LinkToPage';

function Manufacturers({ manufacturersData }) {
  return (
    <section className={styles.wrapper}>
      <div className={styles.title}>
        Поиск сервисного центра по производителю
      </div>
      <ul className={styles.manufacturers}>
        {
          // * Getting data
          manufacturersData &&
            manufacturersData.map(item => {
              return (
                <li>
                  <Link href="#">
                    <Image
                      width={item.image.width}
                      height={item.image.height}
                      src={item.image.src}
                      alt={item.image.alt}
                    />
                  </Link>
                </li>
              );
            })
        }
        <div className={styles.manufacturersLink}>
          <LinkToPage href="#"> Все производители</LinkToPage>
        </div>
      </ul>
      <div className={styles.serviceLink}>
        <LinkToPage href="#">Все авторизованные сервисные центры</LinkToPage>
      </div>
    </section>
  );
}

export default Manufacturers;
