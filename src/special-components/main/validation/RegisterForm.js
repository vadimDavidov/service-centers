'use client';
import styles from './RegisterForm.module.css';
import Image from 'next/image';
import RegisterDetails from './RegisterDetails';
import { useState } from 'react';

function RegisterForm() {
  const [isShowCities, setIsShowCities] = useState(false);

  return (
    <div className={styles.form}>
      <div onClick={() => isShowCities && setIsShowCities(false)}>
        <div className="container">
          <div className={styles.header}>
            <h1>Добавление сервисного центра, шаг 1 из 3</h1>
          </div>
          <div className={styles.inputGroup}>
            <h3>Информация о компании</h3>
            <label htmlFor="canter_name">Название</label>
            <input name="canter_name" type="text" />
            <small>От 2 до 40 символов, без ООО, СЦ, АСЦ и т.п.</small>
            <h3>Расположение</h3>
            <div className={styles.alertInfo}>
              <span>
                <Image
                  width={20}
                  height={20}
                  src="/icons/info.svg"
                  alt="icon"
                />
              </span>
              Если у вас несколько сервисных центров, укажите здесь адрес
              центрального офиса. Впоследствии вы сможете добавить другие адреса
              из Личного кабинета.
            </div>
          </div>
        </div>
      </div>
      <RegisterDetails
        onShowCities={() => !isShowCities && setIsShowCities(true)}
        addressText="Пример: ул. Мира, д.22, строение 4"
        officeText="Пример: оф. 303"
        finderText="Пример: вход со двора, 3 этаж"
      />
    </div>
  );
}

export default RegisterForm;
