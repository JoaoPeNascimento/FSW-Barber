import { getServerSession } from "next-auth";
import { authOptions } from "../_lib/auth";
import { db } from "../_lib/prisma";

export const getConcludedBookings = async () => {
  const user = await getServerSession(authOptions);
  if (!user) {
    return [];
  }
  return db.booking.findMany({
    where: {
      userId: user?.user.id,
      date: {
        lt: new Date(),
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
