import Image from "next/image";
import BookingItem from "./_components/BookingItem";
import Header from "./_components/Header";
import { PopularBarbershop } from "./_components/BarbershopsList";
import { Barbershops } from "./_components/BarbershopsList";
import QuickSearchItems from "./_components/QuickSearchItems";
import SearchInput from "./_components/Search";
import { getServerSession } from "next-auth";
import { authOptions } from "./_lib/auth";
import Title from "./_components/Title";
import { format } from "date-fns/format";
import { ptBR } from "date-fns/locale/pt-BR";
import { getConfirmedBookings } from "./_data/get-confirmed-bookings";

const Home = async () => {
  const session = await getServerSession(authOptions);
  const confirmedBookings = await getConfirmedBookings();

  return (
    <div>
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">
          Olá, {session?.user ? session.user.name : "Bem vindo!"}
        </h2>
        <p>
          <span className="capitalize">
            {format(new Date(), "EEEE, dd", { locale: ptBR })}
          </span>
          <span>&nbsp;de&nbsp;</span>
          <span className="capitalize">
            {format(new Date(), "MMMM", { locale: ptBR })}
          </span>
        </p>

        {/* Search */}
        <div className="my-6">
          <SearchInput />
        </div>
        {/* Busca rápida */}
        <QuickSearchItems />

        {/* Banner */}
        <div className="relative mt-6 h-[150px] w-full">
          <Image
            alt="Agende nos melhores com FSW Barber"
            src="/Banner1.png"
            fill
            className="rounded-xl object-cover"
          />
        </div>

        {/* AGENDAMENTOS */}
        {confirmedBookings.length > 0 && (
          <>
            <Title>Agendamentos</Title>
            <div className="flex overflow-x-auto gap-3 [&::-webkit-scrollbar]:hidden">
              {confirmedBookings.map((booking) => (
                <BookingItem
                  booking={JSON.parse(JSON.stringify(booking))}
                  key={booking.id}
                />
              ))}
            </div>
          </>
        )}

        {/* BARBEARIAS */}
        <Barbershops />
        <PopularBarbershop />
      </div>
    </div>
  );
};

export default Home;
