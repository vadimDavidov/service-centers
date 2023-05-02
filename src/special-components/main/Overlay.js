import styles from './Overlay.module.css';

function Overlay(props) {
  return <div onClick={props.onCloseModal} className={styles.overlay}></div>;
}

export default Overlay;
