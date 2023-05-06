import styles from './Footer.module.css';
import Image from 'next/image';
import Link from 'next/link';

function Footer() {
  return (
    <div className={styles.wrapper}>
      <div className="container">
        <section className={styles.footer}>
          <div className={styles.left}>
            <div className={styles.logoGroup}>
              <Image
                width={38}
                height={38}
                src="/icons/footer-logo.svg"
                alt="/footer-logo"
              />
              <p>Ремонт в сервисных центрах Краснодара</p>
            </div>
            <hr />
            <span>© 2010 — {new Date().getFullYear()}</span>
            <hr />
            <div className={styles.links}>
              <Link href="#">О компании </Link>
              <Link href="#">Пользовательское соглашение </Link>
              <Link href="#">Оферта </Link>
              <Link href="#">Оферта для Бизнес-пользователей </Link>
              <Link href="#">Политика конфиденциальности </Link>
              <Link href="#">Политика обработки персональных данных </Link>
            </div>
          </div>
          <div className={styles.comodo}>
            <Image
              width={52}
              height={63}
              src="/images/comodo.png"
              alt="comodo-img"
            />
          </div>
          <div className={styles.middle}>
            <div className={styles.links}>
              <Link href="#">Сервис-центры по виду техники </Link>
              <Link href="#">Сервис-центры по производителю </Link>
              <Link href="#">Сервисные услуги </Link>
              <Link href="#">Вопросы-ответы по ремонту </Link>
              <hr />
              <Link href="#">Обратная связь </Link>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.links}>
              <Link href="#">Вход в личный кабинет </Link>
              <Link href="#">Добавить сервис-центр </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Footer;
