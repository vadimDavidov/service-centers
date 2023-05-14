import SearchBar from '@/special-components/main/SearchBar';
import Categories from '@/special-components/main/Categories';
import Manufacturers from '@/special-components/main/Manufacturers';
import Counter from '@/special-components/main/Counter';
import PopularServices from '@/special-components/main/PopularServices';
import Suggestions from '@/special-components/main/Suggestions';
import { categoriesData } from '@/data/categoriesData';
import { manufacturersData } from '@/data/manufacturersData';
import { popularServicesData } from '@/data/popularServicesData';

export default function page() {
  return (
    <>
      <title>Сервисные центры Казани</title>
      <SearchBar placeholder="Что сломалось?" />
      <Categories categoriesData={categoriesData} />
      <Manufacturers manufacturersData={manufacturersData} />
      <Counter />
      <PopularServices popularServicesData={popularServicesData} />
      <Suggestions />
    </>
  );
}
