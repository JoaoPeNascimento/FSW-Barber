import { SearchIcon } from "lucide-react";
import Header from "./_components/Header";
import { Button } from "./_components/ui/button";
import { Input } from "./_components/ui/input";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, João</h2>
        <p>Sexta-feira, 20 de Junho</p>

        <div className="flex gap-2 mt-6 items-center">
          <Input placeholder="Pesquisar..." />
          <Button>
            <SearchIcon />
          </Button>
        </div>

        <div className="relative mt-6 h-[150px] w-full">
          <Image
            fill
            src={"/banner1.png"}
            alt="Banner: Agende com os melhores na fsw Barber"
            className="object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}
