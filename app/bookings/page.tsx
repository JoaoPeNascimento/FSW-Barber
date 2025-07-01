import Header from "../_components/Header";
import BookingItem from "../_components/BookingItem";
import Title from "../_components/Title";
import { getConfirmedBookings } from "../_data/get-confirmed-bookings";
import { getConcludedBookings } from "../_data/get-concluded-bookings";

const Bookings = async () => {
  const confirmedBookings = await getConfirmedBookings();

  const concludedBookings = await getConcludedBookings();

  return (
    <>
      <Header />
      <div className="p-5 space-y-3">
        <h1 className="text-xl font-bold">Agendamentos</h1>
        {confirmedBookings.length === 0 && concludedBookings.length === 0 && (
          <p className="text-center">Nenhum agendamento encontrado.</p>
        )}
        {confirmedBookings.length > 0 && (
          <>
            <Title>Confirmados</Title>
            {confirmedBookings.map((booking) => (
              <BookingItem
                booking={JSON.parse(JSON.stringify(booking))}
                key={booking.id}
              />
            ))}
          </>
        )}

        {concludedBookings.length > 0 && (
          <>
            <Title>Finalizados</Title>
            {concludedBookings.map((booking) => (
              <BookingItem
                booking={JSON.parse(JSON.stringify(booking))}
                key={booking.id}
              />
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default Bookings;
