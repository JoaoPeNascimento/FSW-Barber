import { Barbershop } from "@prisma/client";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { StarIcon } from "lucide-react";
import Link from "next/link";

interface BarbershopItemProps {
  barbershop: Barbershop;
}

const BarbershopItem = ({ barbershop }: BarbershopItemProps) => {
  return (
    <Card className="min-w-[167px] lg:min-w-[400px] rounded-2xl">
      <CardContent className="p-0 px-1 pt-1 flex flex-col lg:flex-row lg:items-start lg:space-x-4">
        <div className="relative w-full h-[159px] lg:w-[180px] lg:h-[180px] flex-shrink-0">
          <Image
            fill
            className="object-cover rounded-2xl"
            src={barbershop.imageUrl}
            alt={barbershop.name}
          />

          <Badge
            className="absolute left-2 top-2 space-x-1"
            variant="secondary"
          >
            <StarIcon size={12} className="fill-primary text-primary" />
            <p className="text-xs font-semibold">5,0</p>
          </Badge>
        </div>

        <div className="py-3 px-1 flex flex-col justify-start lg:py-2 lg:px-0 lg:h-[180px]">
          <h3 className="truncate font-semibold lg:text-lg lg:font-bold">
            {barbershop.name}
          </h3>
          <p className="truncate text-sm text-gray-400 mt-1">
            {barbershop.adress}
          </p>
          <div className="mt-3 lg:mt-auto">
            <Button
              variant="secondary"
              className="w-full lg:w-auto lg:bg-primary"
              asChild
            >
              <Link href={`/barbershops/${barbershop.id}`}>Reservar</Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BarbershopItem;
