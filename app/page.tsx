import Image from "next/image";
import BookingItem from "./_components/BookingItem";
import Header from "./_components/Header";
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
        <div
          className="
    my-6
    flex
    flex-col
    gap-6
    lg:flex-row
    lg:gap-8
  "
        >
          {/* Lado esquerdo: Welcome + Search alinhado ao bottom */}
          <div className="flex flex-col w-full lg:w-1/2 lg:justify-between lg:h-[180px]">
            {/* Bloco do texto Welcome */}
            <div>
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
            </div>

            {/* SearchInput alinhado ao fundo no desktop */}
            <div className="mt-4 lg:mt-0">
              <SearchInput />
            </div>
          </div>

          {/* Lado direito: Agendamentos */}
          {confirmedBookings.length > 0 && (
            <div className="w-full lg:w-1/2 flex flex-col gap-3">
              <Title>Agendamentos</Title>
              <div className="flex overflow-x-auto gap-3 [&::-webkit-scrollbar]:hidden">
                {confirmedBookings.map((booking) => (
                  <BookingItem
                    booking={JSON.parse(JSON.stringify(booking))}
                    key={booking.id}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Busca rápida */}
        <QuickSearchItems />

        {/* Banner */}
        <div className="relative mt-6 h-[150px] w-full lg:hidden">
          <Image
            alt="Agende nos melhores com FSW Barber"
            src="/Banner1.png"
            fill
            className="rounded-xl object-cover"
          />
        </div>

        {/* AGENDAMENTOS */}
        {confirmedBookings.length > 0 && (
          <div className="lg:hidden">
            <Title>Agendamentos</Title>
            <div className="flex overflow-x-auto gap-3 [&::-webkit-scrollbar]:hidden">
              {confirmedBookings.map((booking) => (
                <BookingItem
                  booking={JSON.parse(JSON.stringify(booking))}
                  key={booking.id}
                />
              ))}
            </div>
          </div>
        )}

        {/* BARBEARIAS */}
        <Barbershops />
      </div>
    </div>
  );
};

export default Home;
