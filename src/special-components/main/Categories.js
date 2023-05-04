import '../../app/globals.css';
import styles from './Categories.module.css';
import Image from 'next/image';
import Link from 'next/link';
import LinkToPage from './LinkToPage';

function Categories({ categoriesData }) {
  return (
    <div className="container">
      <ul className={styles.categories}>
        {
          //* Getting data
          categoriesData &&
            categoriesData.map(item => {
              return (
                <li className={styles.category}>
                  <div className={styles.image}>
                    <Link href="#">
                      <Image
                        src={item.image.src}
                        width={item.image.width}
                        height={item.image.height}
                        alt={item.image.alt}
                      />
                    </Link>
                  </div>
                  <div className={styles.content}>
                    <div className={styles.contentTitle}>
                      <Link href="#">{item.head}</Link>
                    </div>
                    <div className={styles.contentList}>{item.itemsList}</div>
                  </div>
                </li>
              );
            })
        }
      </ul>
      <div className={styles.link}>
        <LinkToPage href="#">Смотреть все виды техники</LinkToPage>
      </div>
    </div>
  );
}

export default Categories;
