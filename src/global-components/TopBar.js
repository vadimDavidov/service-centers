'use client';
import styles from './TopBar.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import ModalCities from '@/shared-components/ModalCities';
import Overlay from '@/special-components/main/Overlay';
import { modalData } from '@/data/modalData';

function TopBar() {
  const cities = modalData.map(city => city.map(item => item.props.children));
  const paths = modalData.map(link => link.map(path => path.props.href));
  const [isOpen, setIsOpen] = useState(false);
  const [pickedcity, setPickedCity] = useState(cities[0][0]);

  // * Accept and handle data from child component
  const handleClick = data => {
    setPickedCity(data);
    console.log(`Data from Child accepted: ${data}`);
  };

  const getEvent = acceptedEvent => {
    console.log(acceptedEvent);
  };

  const toggleModal = () => {
    !isOpen ? setIsOpen(true) : setIsOpen(false);
  };

  const closeModal = () => {
    setIsOpen(false);
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
            <span>{pickedcity}</span>
          </button>
        </div>
        <Link href="#" className={styles.loginLink} type="button">
          <Image
            width={25}
            height={25}
            src="/icons/login.svg"
            alt="arrow-img"
          />
        </Link>
      </div>
      {isOpen && (
        <>
          <Overlay onCloseModal={closeModal} />
          <ModalCities
            onCloseModal={closeModal}
            data={cities}
            getEvent={getEvent}
            handleClick={handleClick}
            href={paths}
          />
        </>
      )}
    </div>
  );
}

export default TopBar;
