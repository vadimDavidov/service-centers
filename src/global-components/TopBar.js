'use client';
import styles from './TopBar.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import ModalCities from '@/shared-components/ModalCities';
import Overlay from '@/special-components/main/Overlay';

function TopBar() {
  const [isOpen, setIsOpen] = useState(false);

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
            <span>Краснодар</span>
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
          <ModalCities onCloseModal={closeModal} />
        </>
      )}
    </div>
  );
}

export default TopBar;
