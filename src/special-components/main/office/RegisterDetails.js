import styles from './RegisterDetails.module.css';
import Image from 'next/image';

function RegisterDetails(props) {
  return (
    <div className="container">
      <div className={styles.form}>
        <div className={styles.group}>
          <label htmlFor="city">Город</label>
          <select name="city" id=""></select>
        </div>
        <div className={styles.group}>
          <label htmlFor="">Адрес</label>
          <div className={styles.addressGroup}>
            <input
              className={styles.address}
              type="text"
              placeholder={props.addressText}
            />
            <button>Показать на карте</button>
          </div>
          <small>
            Только адрес, без бизнес-центра, без номера офиса, без этажа и т.п.
          </small>
        </div>
        <div className={styles.group}>
          <label htmlFor="">Офис</label>
          <input
            className={styles.address}
            type="text"
            placeholder={props.officeText}
          />

          <small>Номер офиса, бокса, павильона</small>
        </div>
        <div className={styles.group}>
          <label htmlFor="">Как найти</label>
          <input
            className={styles.address}
            type="text"
            placeholder={props.finderText}
          />
          <small>Как найти ваш сервис-центр внутри здания</small>
        </div>

        {/* MAP */}
        <div className={`hidden {styles.coords}`}>
          <input
            className={styles.latitude}
            type="text"
            value={45.03547}
            readOnly
          />
          <input
            className={styles.longitude}
            type="text"
            value={38.975313}
            readOnly
          />
        </div>

        <button className={styles.formBtn} type="submit">
          Продолжить »
        </button>

        <input
          className={`hidden ${styles.token}`}
          type="text"
          value="Te4fXgT7mefx0mNmTyBJ3qfPIkra_93DWuQBRsFSYnQ"
          readOnly
        />
      </div>
    </div>
  );
}

export default RegisterDetails;
