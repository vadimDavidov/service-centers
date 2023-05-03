import Head from 'next/head';
import SearchBar from '@/special-components/main/SearchBar';
import Categories from '@/special-components/main/Categories';
import Manufacturers from '@/special-components/main/Manufacturers';
import Counter from '@/special-components/main/Counter';
import PopularServices from '@/special-components/main/PopularServices';
import Suggestions from '@/special-components/main/Suggestions';
import { modalLinks } from '@/data/modalData';
import { categoriesData } from '@/data/categoriesData';
import { manufacturersData } from '@/data/manufacturersData';
import { popularServicesData } from '@/data/popularServicesData';

export default function Moscow() {
  return (
    <>
      <Head>
        <title>Поиск сервисных центров для ремонта и обслуживания</title>
      </Head>
      <SearchBar placeholder="Что сломалось?" data={modalLinks} />
      <Categories data={categoriesData} />
      <Manufacturers data={manufacturersData} />
      <Counter />
      <PopularServices data={popularServicesData} />
      <Suggestions />
    </>
  );
}
