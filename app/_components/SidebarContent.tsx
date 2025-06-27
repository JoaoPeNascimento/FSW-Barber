"use client";

import { Calendar1Icon, HomeIcon, LogInIcon, LogOutIcon } from "lucide-react";
import { SheetClose, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";
import { quickSearchOptions } from "../_constants/search";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarImage } from "./ui/avatar";

const SidebarContent = () => {
  const { data } = useSession();
  const handleLoginWithClicked = async () => {
    await signIn("google");
  };
  const handleLogoutClicked = async () => {
    await signOut();
  };

  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle className="text-left">Menu</SheetTitle>
      </SheetHeader>

      {/* Avatar */}
      <div className="flex items-center border-b border-solid py-5 space-x-3 justify-between">
        {data?.user ? (
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src={data?.user?.image ?? ""} />
            </Avatar>
            <div>
              <p className="font-bold">{data?.user?.name}</p>
              <p className="text-sm">{data?.user?.email}</p>
            </div>
          </div>
        ) : (
          <>
            <h2 className="font-bold">Olá, faça seu login!</h2>
            <Dialog>
              <DialogTrigger asChild>
                <Button size={"icon"}>
                  <LogInIcon />
                </Button>
              </DialogTrigger>
              <DialogContent className="w-[90%]">
                <DialogHeader>
                  <DialogTitle>Faça login na plataforma!</DialogTitle>
                  <DialogDescription>
                    Conecte-se utilizando sua conta Google
                  </DialogDescription>
                </DialogHeader>
                <Button
                  variant={"outline"}
                  className="font-bold"
                  onClick={handleLoginWithClicked}
                >
                  <Image
                    src="/google.svg"
                    alt="Google"
                    width={18}
                    height={18}
                  />
                  Google
                </Button>
              </DialogContent>
            </Dialog>
          </>
        )}
      </div>

      {/* Botões iniciais */}
      <div className="flex flex-col gap-2 py-5 border-b border-solid">
        <SheetClose asChild>
          <Button className="justify-start gap-2" variant="ghost" asChild>
            <Link href="/">
              <HomeIcon size={18} />
              Inicio
            </Link>
          </Button>
        </SheetClose>
        <Button className="justify-start gap-2" variant="ghost">
          <Calendar1Icon size={18} />
          Agendamentos
        </Button>
      </div>

      {/* Serviços */}
      <div className="flex flex-col gap-2 py-5 border-b border-solid">
        {quickSearchOptions.map((option) => (
          <Button
            key={option.title}
            className="justify-start gap-2"
            variant="ghost"
          >
            <Image
              src={option.imageUrl}
              alt={option.title}
              width={18}
              height={18}
            />
            {option.title}
          </Button>
        ))}
      </div>

      {/* Logout */}
      <div className="flex flex-col gap-2 py-5">
        <Button
          className="justify-start gap-2"
          variant="ghost"
          onClick={handleLogoutClicked}
        >
          <LogOutIcon size={18} />
          Sair da conta
        </Button>
      </div>
    </SheetContent>
  );
};

export default SidebarContent;
