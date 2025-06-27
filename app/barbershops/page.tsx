import BarbershopItem from "../_components/BarberShopItem";
import Header from "../_components/Header";
import SearchInput from "../_components/Search";
import Title from "../_components/Title";
import { db } from "../_lib/prisma";

interface BarbershopsPageProps {
  searchParams: {
    search: string;
  };
}

const Barbershops = async ({ searchParams }: BarbershopsPageProps) => {
  const barbershops = await db.barbershop.findMany({
    where: {
      name: {
        contains: searchParams.search,
        mode: "insensitive",
      },
    },
  });

  return (
    <div>
      <Header />
      <div className="my-6 px-5">
        <SearchInput />
      </div>
      <div className="px-5">
        <Title>Resultados para &quot;{searchParams.search}&quot;</Title>
        <div className="grid grid-cols-2 gap-4">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Barbershops;
