import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex  items-center justify-center gap-12 px-4 py-16">
        <div>
          <h1>Авторизация/Регистрация</h1>
          <form className="flex flex-col gap-4">
              <input placeholder="Логин" className="text-black" />
              <input placeholder="Пароль" className="text-black"/>
              <button className="bg-white text-black px-4 py-2 rounded-md">Войти/Зарегестрироваться</button>
          </form>
        </div>
        <div></div>
      </div>
    </main>
  );
}
