import PhoneItem from "@/app/_components/PhoneItem";
import ServiceItem from "@/app/_components/ServiceItem";
import { Button } from "@/app/_components/ui/button";
import { db } from "@/app/_lib/prisma";
import { ChevronLeft, MapPin, MenuIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface BarbershopPageProps {
  params: {
    id: string;
  };
}

const BarbershopPage = async ({ params }: BarbershopPageProps) => {
  const barbershop = await db.barbershop.findUnique({
    where: {
      id: params.id,
    },
    include: {
      services: true,
    },
  });

  if (!barbershop) {
    return notFound();
  }

  return (
    <div>
      {/* Imagem */}
      <div className="relative h-[250px] w-full">
        <Image
          src={barbershop?.imageUrl}
          alt={barbershop?.name}
          fill
          className="object-cover"
        />

        <Button
          className="absolute left-4 top-4"
          variant="secondary"
          size={"icon"}
          asChild
        >
          <Link href="/">
            <ChevronLeft />
          </Link>
        </Button>

        <Button
          className="absolute right-4 top-4"
          variant="secondary"
          size={"icon"}
        >
          <Link href="/">
            <MenuIcon />
          </Link>
        </Button>
      </div>

      {/* Endereço */}
      <div className="border-b border-solid p-5">
        <h1 className="text-xl mb-3 font-bold">{barbershop.name}</h1>
        <div className="flex items-center gap-2">
          <MapPin size={16} className="text-primary" />
          <p className="text-sm">{barbershop.adress}</p>
        </div>
        <div className="flex items-center gap-2">
          <StarIcon size={16} className="text-primary fill-primary" />
          <p className="text-sm">5,0 (400 avaliações)</p>
        </div>
      </div>

      {/* Descrição */}
      <div className="p-5 space-y-2 border-b border-solid">
        <h2 className="text-xs font-bold text-gray-400 uppercase">Sobre nós</h2>
        <p className="text-justify text-sm">{barbershop.description}</p>
      </div>

      {/* Serviços */}
      <div className="p-5 space-y-3 border-b border-solid">
        <h2 className="text-gray-400 text-xs font-bold uppercase">Serviços</h2>
        <div className="space-y-3">
          {barbershop.services.map((service) => (
            <ServiceItem key={service.id} service={service} />
          ))}
        </div>
      </div>

      {/* Contatos */}
      <div className="p-5 space-y-3">
        {barbershop.phones.map((phone) => (
          <PhoneItem key={phone} phone={phone} />
        ))}
      </div>
    </div>
  );
};

export default BarbershopPage;
