import Link from 'next/link';

export const popularServicesData = [
  {
    title: <Link href="#">Компьютерная помощь</Link>,
    itemsList: [
      <Link href="#">Установка Windows, </Link>,
      <Link href="#">Удаление вирусов, </Link>,
      <Link href="#">Модернизация, апгрейд, </Link>,
      <Link href="#">Настройка интернета, </Link>,
      <Link href="#">Установка Windows, </Link>,
    ],
  },
  {
    title: <Link href="#">Подключение бытовой техники</Link>,
    itemsList: [
      <Link href="#">Cтиральной машины, </Link>,
      <Link href="#">Посудомоечной машины, </Link>,
      <Link href="#">Установка кондиционера, </Link>,
      <Link href="#">Подключение водонагревателя, </Link>,
    ],
  },
  {
    title: <Link href="#">Заправка картриджей</Link>,
    itemsList: [
      <Link href="#">HP (LaserJet, DeskJet), </Link>,
      <Link href="#">Canon (Pixma, MG), </Link>,
      <Link href="#">Samsung (ML, SCX, MLT, CLP...), </Link>,
      <Link href="#">Ricoh (SP, ...), </Link>,
    ],
  },
];
