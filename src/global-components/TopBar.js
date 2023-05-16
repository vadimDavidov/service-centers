'use client';
import styles from './TopBar.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useContext, createContext, useEffect } from 'react';
import ModalCities from '@/global-components/ModalCities';
import Overlay from '@/special-components/main/Overlay';
import TopbarDropdown from './TopbarDropdown';
import { CitiesDataContext } from '@/app/layout';

export let CurrentCityContext;
export let CurrentCoordsContext;

function TopBar() {
  const citiesData = useContext(CitiesDataContext);
  const [isOpen, setIsOpen] = useState(false);
  const [pickedCity, setPickedCity] = useState('Москва');
  const [isDropdown, setIsDropdown] = useState(false);

  useEffect(() => {
    const body = document.querySelector('body');
    body.style.overflowY = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  CurrentCityContext = createContext(pickedCity);

  const currentCityElement = citiesData.filter(
    city => city.name === pickedCity
  );
  const currentCoords = currentCityElement.map(element => element.coords);

  CurrentCoordsContext = createContext(currentCoords);

  // * Accept and set data from child component - 'ModalCities.js'
  const handleClick = eventValue => setPickedCity(() => eventValue);

  const toggleModal = () => setIsOpen(prev => !prev);

  const closeModal = () => setIsOpen(false);

  const toggleDropdown = () => setIsDropdown(prev => !prev);

  return (
    <div className={styles.wrapper}>
      <div className={styles.topbar}>
        <div className={styles.brand}>
          <Link href="/" onClick={() => setPickedCity('Выбор города')}>
            <Image
              className={styles.logo}
              width={43}
              height={56}
              src="/icons/logo.svg"
              alt="logo-img"
            />
            <p>Сервисные центры</p>
          </Link>

          <button onClick={toggleModal} type="button" value={pickedCity}>
            <span>{pickedCity}</span>
          </button>
        </div>

        <div className={styles.dropdownContainer}>
          <button className={styles.loginLink} type="button">
            <Image
              width={25}
              height={25}
              src="/icons/login.svg"
              alt="arrow-img"
              onClick={toggleDropdown}
            />
          </button>
          <div className={styles.dropdown}>
            {isDropdown && <TopbarDropdown onClose={toggleDropdown} />}
          </div>
        </div>
      </div>
      {isOpen && (
        <>
          <Overlay onCloseModal={closeModal} />
          <ModalCities
            onCloseModal={closeModal}
            citiesData={citiesData}
            handleClick={handleClick}
          />
        </>
      )}
    </div>
  );
}

export default TopBar;
