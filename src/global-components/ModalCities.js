'use client';
import styles from './ModalCities.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

function ModalCities({ citiesData, handleClick, onCloseModal }) {
  const [isShowList, setIsShowlist] = useState(false);

  // * Passing event result from child to parent component - 'TopBar.js'
  const handlePicking = event => {
    handleClick(event.target.name);
  };

  const handleCities = () => {
    return citiesData.map(city => {
      return (
        <li onClick={onCloseModal} key={city.id}>
          <Link
            name={city.name}
            onClick={item => handlePicking(item)}
            href={city.link}
          >
            {city.name}
          </Link>
        </li>
      );
    });
  };

  const toggleShowList = () => {
    setIsShowlist(prev => !prev);
  };

  return (
    <div className="container">
      <div className={`modal-open ${styles.modal}`}>
        <div className={styles.modalHeader}>
          <h4>Выберите свой город</h4>
          <button onClick={onCloseModal} type="button">
            <Image
              width={25}
              height={25}
              src="/icons/close.svg"
              alt="close-image"
            />
          </button>
        </div>
        <div className={styles.modalBody}>
          <div className={styles.bodyBlocks}>
            <ul className={styles.leftBlock}>{handleCities().slice(0, 6)}</ul>
            <ul className={styles.middleBlock}>
              {handleCities().slice(6, 12)}
            </ul>
            <ul className={styles.rightBlock}>
              {handleCities().slice(12, 19)}
            </ul>
          </div>
        </div>
        <hr />
        <div className={styles.selector} onClick={toggleShowList}>
          <span placeholder="Абакан">Абакан</span>
          <span>
            <Image
              width={25}
              height={25}
              src={
                !isShowList
                  ? '/icons/expand-more.svg'
                  : '/icons/expand-less.svg'
              }
              alt="expand-image"
            />
          </span>
        </div>
        {isShowList && (
          <ul className={styles.selectorOptions}>
            <div>
              <input
                type={'search'}
                placeholder="Поиск города"
                autoFocus={true}
              />
            </div>
            {citiesData.map(city => (
              <li key={city.id}>{handleCities()}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default ModalCities;
