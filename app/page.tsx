import { SearchIcon } from "lucide-react";
import Header from "./_components/Header";
import { Button } from "./_components/ui/button";
import { Input } from "./_components/ui/input";
import Image from "next/image";
import { Card, CardContent } from "./_components/ui/card";
import { Badge } from "./_components/ui/badge";
import { db } from "./_lib/prisma";
import { Avatar, AvatarImage } from "./_components/ui/avatar";
import BarbershopItem from "./_components/BarberShopItem";

const Home = async () => {
  const barbershops = await db.barbershop.findMany({});

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

        {/* Banner */}
        <div className="relative mt-6 h-[150px] w-full">
          <Image
            fill
            src={"/banner1.png"}
            alt="Banner: Agende com os melhores na fsw Barber"
            className="object-cover rounded-xl"
          />
        </div>

        {/* AGENDAMENTOS */}
        <h2 className="text-gray-400 font-bold text-xs mt-6 mb-3">
          AGENDAMENTOS
        </h2>

        {/* CARD AGENDAMENTOS */}
        <Card>
          <CardContent className="flex justify-between p-0">
            {/* ESQUERDA */}
            <div className="flex flex-col gap-2 py-5 pl-5">
              <Badge className="w-fit">Confirmado</Badge>
              <h3 className="font-semibold">Corte de Cabelo</h3>

              <div className="flex items-center gap-2">
                <Avatar className="w-6 h-6">
                  <AvatarImage src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png"></AvatarImage>
                </Avatar>
                <p className="text-sm">Barbearia do João</p>
              </div>
            </div>
            {/* DIREITA */}
            <div className="flex flex-col items-center justify-center px-5 border-l border-solid">
              <p className="text-sm">Junho</p>
              <p className="text-2xl">23</p>
              <p className="text-sm">10:00</p>
            </div>
          </CardContent>
        </Card>

        <h2 className="text-gray-400 font-bold text-xs mt-6 mb-3">
          RECOMENDADOS
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Home;
