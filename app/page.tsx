import Image from "next/image";
import BookingItem from "./_components/BookingItem";
import Header from "./_components/Header";
import { PopularBarbershop } from "./_components/BarbershopsList";
import { Barbershops } from "./_components/BarbershopsList";
import QuickSearchItems from "./_components/QuickSearchItems";
import SearchInput from "./_components/Search";

const Home = async () => {
  return (
    <div>
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, João</h2>
        <p>Sexta-feira, 20 de Junho</p>

        {/* Search */}
        <div className="my-6">
          <SearchInput />
        </div>
        {/* Busca rápida */}
        <QuickSearchItems />

        {/* Banner */}
        <div className="w-full flex justify-center mt-6 px-4">
          <div className="relative w-full max-w-5xl h-[350px]">
            <Image
              src="/banner1.png"
              alt="Banner: Agende com os melhores na fsw Barber"
              fill
              className="object-cover rounded-xl"
            />
          </div>
        </div>

        {/* AGENDAMENTOS */}
        <BookingItem />

        {/* BARBEARIAS */}
        <Barbershops />
        <PopularBarbershop />
      </div>
    </div>
  );
};

export default Home;
