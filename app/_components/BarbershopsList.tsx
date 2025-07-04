import { getBarbershops, popularBarbershops } from "../_data/get-barbershops";
import BarbershopItem from "./BarberShopItem";
import Title from "./Title";

const Barbershops = async () => {
  const barbershops = await getBarbershops();

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
  const popularBarbershop = await popularBarbershops();
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
