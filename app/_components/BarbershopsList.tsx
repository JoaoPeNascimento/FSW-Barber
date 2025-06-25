import { db } from "../_lib/prisma";
import BarbershopItem from "./BarberShopItem";
import Title from "./Title";

const Barbershops = async () => {
  const barbershops = await db.barbershop.findMany({});

  return (
    <>
      <Title>Recomendados</Title>
      <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
        {barbershops.map((barbershop) => (
          <BarbershopItem key={barbershop.id} barbershop={barbershop} />
        ))}
      </div>
    </>
  );
};

const PopularBarbershop = async () => {
  const popularBarbershop = await db.barbershop.findMany({
    orderBy: {
      name: "desc",
    },
  });

  return (
    <>
      <Title>Populares</Title>
      <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
        {popularBarbershop.map((barbershop) => (
          <BarbershopItem key={barbershop.id} barbershop={barbershop} />
        ))}
      </div>
    </>
  );
};

export { PopularBarbershop, Barbershops };
