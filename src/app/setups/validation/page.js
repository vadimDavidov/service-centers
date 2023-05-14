import ValidationForm from '@/special-components/main/validation/ValidationForm';

function page() {
  return (
    <>
      <title>Вход в личный кабинет</title>
      <ValidationForm
        route="krasnodar"
        textEmail="Email"
        textPassword="Пароль"
      />
    </>
  );
}

export default page;
