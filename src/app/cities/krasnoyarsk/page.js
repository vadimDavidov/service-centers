import Head from 'next/head';
import SearchBar from '@/special-components/main/SearchBar';
import Categories from '@/special-components/main/Categories';
import Manufacturers from '@/special-components/main/Manufacturers';
import Counter from '@/special-components/main/Counter';
import PopularServices from '@/special-components/main/PopularServices';
import Suggestions from '@/special-components/main/Suggestions';
import { mainCities } from '@/data/modalData';
import { optionCities } from '@/data/modalData';
import { categoriesData } from '@/data/categoriesData';
import { manufacturersData } from '@/data/manufacturersData';
import { popularServicesData } from '@/data/popularServicesData';

export default function Krasnodar() {
  return (
    <>
      <Head>
        <title>Поиск сервисных центров для ремонта и обслуживания</title>
      </Head>

      <SearchBar
        placeholder="Что сломалось?"
        optionCities={optionCities}
        mainCities={mainCities}
        place="Красноярске"
      />
      <Categories categoriesData={categoriesData} />
      <Manufacturers manufacturersData={manufacturersData} />
      <Counter />
      <PopularServices popularServicesData={popularServicesData} />
      <Suggestions />
    </>
  );
}
