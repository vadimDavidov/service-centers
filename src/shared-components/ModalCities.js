'use client';
import styles from './ModalCities.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';
import { modalLinks } from '@/data/modalData';
import { useState } from 'react';

function ModalCities(props) {
  const [showList, setShowList] = useState(false);

  // * Passing event result from child to parent component
  const handlePicking = (event, handleClick) => {
    handleClick = props.handleClick;
    handleClick(event);
  };

  const toggleShowList = () => {
    if (!showList) {
      setShowList(true);
    } else {
      setShowList(false);
    }
  };

  const getData = index => {
    return props.data[index].map((city, i) => {
      return (
        <li
          onClick={() => {
            props.onCloseModal();
            handlePicking(city);
          }}
          key={uuidv4()}
        >
          <Link href={props.href[index][i]}>{city}</Link>
        </li>
      );
    });
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modalHeader}>
        <h4>Выберите свой город</h4>
        <button onClick={props.onCloseModal} type="button">
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
          <ul className={styles.leftBlock}>{getData(0)}</ul>
          <ul className={styles.middleBlock}>{getData(1)}</ul>
          <ul className={styles.rightBlock}>{getData(2)}</ul>
        </div>
        <hr />
        <div className={styles.selector} onClick={toggleShowList}>
          <span placeholder="Абакан">Абакан</span>
          <span>
            <Image
              width={25}
              height={25}
              src={
                !showList ? '/icons/expand-more.svg' : '/icons/expand-less.svg'
              }
              alt="expand-image"
            />
          </span>
        </div>
      </div>

      {showList && (
        <>
          <ul className={styles.selectorOptions}>
            <div>
              <input
                type={'search'}
                placeholder="Поиск города"
                autoFocus={true}
              />
            </div>
            {modalLinks.map(option => (
              <li>{option}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default ModalCities;
