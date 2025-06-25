import { SearchIcon } from "lucide-react";
import Image from "next/image";
import BookingItem from "./_components/BookingItem";
import Header from "./_components/Header";
import { Button } from "./_components/ui/button";
import { Input } from "./_components/ui/input";
import { PopularBarbershop } from "./_components/BarbershopsList";
import { Barbershops } from "./_components/BarbershopsList";
import Footer from "./_components/Footer";
import QuickSearchItems from "./_components/QuickSearchItems";

const Home = async () => {
  return (
    <div>
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, João</h2>
        <p>Sexta-feira, 20 de Junho</p>

        {/* Search */}
        <div className="flex gap-2 mt-6 items-center">
          <Input placeholder="Pesquisar..." />
          <Button>
            <SearchIcon />
          </Button>
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

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default Home;
