import styles from './LinkToPage.module.css';
import Link from 'next/link';
import Image from 'next/image';

function LinkToPage(props) {
  return (
    <div className={styles.link}>
      <Link href={props.href}>
        {props.children}
        <Image
          width={25}
          height={30}
          src="/icons/navigate-next.svg"
          alt="icon"
        />
      </Link>
    </div>
  );
}

export default LinkToPage;
