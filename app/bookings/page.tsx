import { getServerSession } from "next-auth";
import Header from "../_components/Header";
import { authOptions } from "../_lib/auth";
import { db } from "../_lib/prisma";
import BookingItem from "../_components/BookingItem";
import Title from "../_components/Title";

const Bookings = async () => {
  const session = await getServerSession(authOptions);

  const confirmedBookings = await db.booking.findMany({
    where: {
      userId: session?.user.id,
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

  const concludedBookings = await db.booking.findMany({
    where: {
      userId: session?.user.id,
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

  return (
    <>
      <Header />
      <div className="p-5 space-y-3">
        <h1 className="text-xl font-bold">Agendamentos</h1>
        {confirmedBookings.length > 0 && (
          <>
            <Title>Confirmados</Title>
            {confirmedBookings.map((booking) => (
              <BookingItem booking={booking} key={booking.id} />
            ))}
          </>
        )}

        {concludedBookings.length > 0 && (
          <>
            <Title>Finalizados</Title>
            {concludedBookings.map((booking) => (
              <BookingItem booking={booking} key={booking.id} />
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default Bookings;
