import Image from "next/image";
import BookingItem from "./_components/BookingItem";
import Header from "./_components/Header";
import { PopularBarbershop } from "./_components/BarbershopsList";
import { Barbershops } from "./_components/BarbershopsList";
import QuickSearchItems from "./_components/QuickSearchItems";
import SearchInput from "./_components/Search";
import { getServerSession } from "next-auth";
import { db } from "./_lib/prisma";
import { authOptions } from "./_lib/auth";
import Title from "./_components/Title";
import { format } from "date-fns/format";
import { ptBR } from "date-fns/locale/pt-BR";

const Home = async () => {
  const session = await getServerSession(authOptions);
  const confirmedBookings = session?.user
    ? await db.booking.findMany({
        where: {
          userId: session?.user.id,
          date: {
            gte: new Date(),
          },
        },
        include: {
          service: {
            include: {
              barbershop: true,
            },
          },
        },
        orderBy: {
          date: "asc",
        },
      })
    : [];

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
        <Title>Agendamentos</Title>
        <div className="flex overflow-x-auto gap-3 [&::-webkit-scrollbar]:hidden">
          {confirmedBookings.map((booking) => (
            <BookingItem booking={booking} key={booking.id} />
          ))}
        </div>

        {/* BARBEARIAS */}
        <Barbershops />
        <PopularBarbershop />
      </div>
    </div>
  );
};

export default Home;
