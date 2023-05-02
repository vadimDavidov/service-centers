import Link from 'next/link';

export const categoriesData = [
  {
    image: {
      src: '/images/categories/notebook.png',
      width: 96,
      height: 96,
      alt: 'image',
    },
    head: 'Цифровая техника',
    itemsList: [
      <Link href="#">Ноутбук, </Link>,
      <Link href="#">Телефон, </Link>,
      <Link href="#">iPhone, </Link>,
      <Link href="#">iPad, </Link>,
      <Link href="#">MacBook, </Link>,
      <Link href="#">Компьютер, </Link>,
      <Link href="#">Фотоаппарат, </Link>,
      <Link href="#">Моноблок, </Link>,
      <Link href="#">Проектор, </Link>,
      <Link href="#">Эл.книга, </Link>,
    ],
  },
  {
    image: {
      src: '/images/categories/washing.png',
      width: 96,
      height: 96,
      alt: 'image',
    },
    head: 'Крупная бытовая техника',
    itemsList: [
      <Link href="#">Стиральная, </Link>,
      <Link href="#">машина, </Link>,
      <Link href="#">Холодильник, </Link>,
      <Link href="#">Плита, </Link>,
      <Link href="#">Посудомоечная машина, </Link>,
      <Link href="#">Водонагреватель, </Link>,
      <Link href="#">Пылесос, </Link>,
      <Link href="#">Кондиционер, </Link>,
      <Link href="#">Духовка, </Link>,
    ],
  },
  {
    image: {
      src: '/images/categories/vacuum.png',
      width: 96,
      height: 96,
      alt: 'image',
    },
    head: 'Мелкая бытовая техника',
    itemsList: [
      <Link href="#">Кофемашина, </Link>,
      <Link href="#">Мультиварка, </Link>,
      <Link href="#">Блендер, </Link>,
      <Link href="#">Утюг, </Link>,
      <Link href="#">Мясорубка, </Link>,
      <Link href="#">Чайник, </Link>,
      <Link href="#">Швейная машинка, </Link>,
    ],
  },
  {
    image: {
      src: '/images/categories/tv.png',
      width: 96,
      height: 96,
      alt: 'image',
    },
    head: 'Аудио-видео техника',
    itemsList: [
      <Link href="#">Телевизор, </Link>,
      <Link href="#">Видеокамера, </Link>,
      <Link href="#">Музыкальный центр, </Link>,
      <Link href="#">Xbox, </Link>,
      <Link href="#">Автомагнитола, </Link>,
      <Link href="#">Усилитель, </Link>,
    ],
  },
  {
    image: {
      src: '/images/categories/drill.png',
      width: 96,
      height: 96,
      alt: 'image',
    },
    head: 'Электро-инструмент',
    itemsList: [
      <Link href="#">Шуруповёрт, </Link>,
      <Link href="#">Дрель, </Link>,
      <Link href="#">Перфоратор, </Link>,
      <Link href="#">Лобзик, </Link>,
      <Link href="#">Электропила, </Link>,
      <Link href="#">Сварочный аппарат, </Link>,
    ],
  },
  {
    image: {
      src: '/images/categories/trimmer.png',
      width: 96,
      height: 96,
      alt: 'image',
    },
    head: 'Садовая техника',
    itemsList: [
      <Link href="#">Газонокосилка, </Link>,
      <Link href="#">Бензопила, </Link>,
      <Link href="#">Культиватор, </Link>,
      <Link href="#">Мини - мойка, </Link>,
      <Link href="#">Снегоуборщик, </Link>,
    ],
  },
];
