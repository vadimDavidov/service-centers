'use client';
import styles from './RegisterDetails.module.css';
import YandexMap from './YandexMap';
import { useContext, useEffect, useRef, useState } from 'react';
import { CitiesDataContext } from '@/app/layout';
import { CurrentCityContext } from '@/global-components/TopBar';

function RegisterDetails({ addressText, officeText, finderText }) {
  const citiesData = useContext(CitiesDataContext);
  const currentCityName = useContext(CurrentCityContext);
  const [isShowCities, setIsShowCities] = useState(false);
  const [selectedCity, setSelectedCity] = useState(currentCityName);

  const openShowList = () => {
    setIsShowCities(true);
  };

  const citiesList = citiesData.map(cities => (
    <option key={cities.id}>{cities.name}</option>
  ));

  const selectedCoords = citiesData
    .filter(city => city.name === selectedCity)
    .map(city => city.coords);

  return (
    <>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.form}>
            <div className={styles.group}>
              <label htmlFor="city">Город</label>
              <select
                onChange={e => setSelectedCity(e.target.value)}
                onClick={openShowList}
              >
                {!isShowCities ? (
                  <option value={selectedCity}>{selectedCity}</option>
                ) : (
                  citiesList
                )}
              </select>
            </div>
            <div className={styles.group}>
              <label htmlFor="address">Адрес</label>
              <div className={styles.addressGroup}>
                <input
                  name="address"
                  className={styles.address}
                  type="text"
                  placeholder={addressText}
                />
                <button>Показать на карте</button>
              </div>
              <small>
                Только адрес, без бизнес-центра, без номера офиса, без этажа и
                т.п.
              </small>
            </div>
            <div className={styles.group}>
              <label htmlFor="office">Офис</label>
              <input
                name="office"
                className={styles.address}
                type="text"
                placeholder={officeText}
              />
              <small>Номер офиса, бокса, павильона</small>
            </div>
            <div className={styles.group}>
              <label htmlFor="search">Как найти</label>
              <input
                name="search"
                className={styles.address}
                type="text"
                placeholder={finderText}
              />
              <small>Как найти ваш сервис-центр внутри здания</small>
            </div>

            {/* ?????????????????????????????????????????????????????????? */}
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
          <div className={styles.map}>
            <YandexMap selectedCoords={selectedCoords} />
          </div>
        </div>
      </div>
    </>
  );
}

export default RegisterDetails;
