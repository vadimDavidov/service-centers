import ValidationForm from '@/special-components/main/office/ValidationForm';

function page() {
  return (
    <>
      <title>Вход в личный кабинет</title>
      <ValidationForm textEmail="Email" textPassword="Пароль" />
    </>
  );
}

export default page;
