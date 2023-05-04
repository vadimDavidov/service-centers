'use client';
import '../../app/globals.css';
import styles from './SearchBar.module.css';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';

function SearchBar({ placeholder, optionCities, place }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState('');

  const handleFilter = event => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = optionCities.filter(
      value =>
        value.props.children
          .trim()
          .toLowerCase()
          .startsWith(searchWord.trim().toLowerCase()) // here can be used includes() method if need
    );
    if (searchWord === '') setFilteredData([]);
    setFilteredData(newFilter);
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered('');
  };

  const getData = () =>
    filteredData.slice(0, 15).map(item => {
      return (
        <li className={styles.dataItem} key={uuidv4()}>
          <span>{item}</span>
        </li>
      );
    });

  return (
    <div className="container">
      <div className={styles.search}>
        <h1>Сервисные центры в {place}</h1>
        <form className={styles.form} action="post">
          <div className={styles.inputGroup}>
            <span className={styles.text}>
              <Image
                src={
                  wordEntered.length > 0
                    ? '/icons/close.svg'
                    : '/icons/search.svg'
                }
                width={29}
                height={29}
                alt="image"
                onClick={clearInput}
              />
            </span>
            <input
              type="text"
              placeholder={placeholder}
              autoFocus={true}
              value={wordEntered}
              onChange={handleFilter}
            />
            <Link href="#" className={styles.searchBtn} target={'_blank'}>
              Найти
            </Link>
          </div>

          <div className={`hidden ${styles.suggestions}`}>
            <div className={styles['p-2']}>Введите хотя бы 3 символа</div>
          </div>
        </form>

        {filteredData.length !== 0 && (
          <ul className={styles.dataResult}>{getData()}</ul>
        )}
      </div>
    </div>
  );
}

export default SearchBar;
