import Link from 'next/link';
import styles from './LinkButton.module.css';

function LinkButton(props) {
  return (
    <Link className={styles.linkButton} href={props.href}>
      {props.children}
    </Link>
  );
}

export default LinkButton;
