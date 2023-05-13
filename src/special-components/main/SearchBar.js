'use client';
import styles from './SearchBar.module.css';
import Image from 'next/image';
import { useContext, useState } from 'react';
import Link from 'next/link';
import { CitiesDataContext } from '@/app/layout';
import { CurrentCityContext } from '@/global-components/TopBar';

function SearchBar({ placeholder }) {
  const citiesData = useContext(CitiesDataContext);
  const currentCity = useContext(CurrentCityContext);
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState('');

  const handleFilter = event => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = citiesData.filter(
      value =>
        value.name
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
        <li className={styles.dataItem} key={item.id}>
          <span>{item.name}</span>
        </li>
      );
    });

  return (
    <div className="container">
      <div className={styles.search}>
        <h1>Сервисные центры - {currentCity}</h1>
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

        {filteredData.length > 0 && (
          <ul className={styles.dataResult}>{getData()}</ul>
        )}
      </div>
    </div>
  );
}

export default SearchBar;
