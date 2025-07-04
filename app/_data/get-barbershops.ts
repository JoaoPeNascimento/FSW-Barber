"use server";

import { db } from "../_lib/prisma";

export const popularBarbershops = async () => {
  return await db.barbershop.findMany({
    orderBy: {
      name: "desc",
    },
  });
};

export const getBarbershops = async () => {
  return await db.barbershop.findMany({});
};
