"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "../_lib/auth";
import { db } from "../_lib/prisma";

export const getConfirmedBookings = async () => {
  const user = await getServerSession(authOptions);
  if (!user) {
    return [];
  }
  return await db.booking.findMany({
    where: {
      userId: user?.user.id,
      date: {
        gte: new Date(),
      },
    },
    include: {
      service: {
        include: {
          barbershop: true,
        },
      },
    },
    orderBy: {
      date: "asc",
    },
  });
};
