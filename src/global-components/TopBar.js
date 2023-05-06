'use client';
import styles from './TopBar.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import ModalCities from '@/global-components/ModalCities';
import Overlay from '@/special-components/main/Overlay';
import TopbarDropdown from './TopbarDropdown';

function TopBar({ mainCities }) {
  const cities = mainCities.map(city => city.map(item => item.props.children));
  const paths = mainCities.map(link => link.map(path => path.props.href));
  const [isOpen, setIsOpen] = useState(false);
  const [pickedCity, setPickedCity] = useState('Выбор города');
  const [isDropdown, setIsDropdown] = useState(false);

  // * Accept and set data from child component - ModalCities
  const handleClick = eventValue => {
    setPickedCity(eventValue);
  };

  const toggleModal = () => {
    !isOpen ? setIsOpen(true) : setIsOpen(false);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    !isDropdown ? setIsDropdown(true) : setIsDropdown(false);
  };

  return (
    <div className="container">
      <div className={styles.topbar}>
        <div className={styles.brand}>
          <Link href="/">
            <Image
              className={styles.logo}
              width={43}
              height={56}
              src="/icons/logo.svg"
              alt="logo-img"
            />
            Сервисные центры
          </Link>
          <button onClick={toggleModal} type="button">
            <span>{pickedCity}</span>
          </button>
        </div>
        <button href="#" className={styles.loginLink} type="button">
          <Image
            width={25}
            height={25}
            src="/icons/login.svg"
            alt="arrow-img"
            onClick={toggleDropdown}
          />
        </button>
        {isDropdown && <TopbarDropdown onClose={toggleDropdown} />}
      </div>
      {isOpen && (
        <>
          <Overlay onCloseModal={closeModal} />
          <ModalCities
            onCloseModal={closeModal}
            cities={cities}
            handleClick={handleClick}
            href={paths}
          />
        </>
      )}
    </div>
  );
}

export default TopBar;
