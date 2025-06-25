import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

const BookingItem = () => {
  return (
    <>
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
    </>
  );
};

export default BookingItem;
