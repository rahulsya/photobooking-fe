import { useState, useEffect } from "react";
import { Navbar, CardAuthMessage } from "../components";
import { BookingItem } from "../parts";
import { useAuth } from "../context/AuthContext";
import { bookingHistory } from "../api";

function HistoryBooking() {
  const { user, token } = useAuth();
  const [dataBooking, setDataBooking] = useState([]);
  const [loading, setLoading] = useState("idle");

  useEffect(() => {
    if (!token) return;

    (async () => {
      try {
        setLoading("process");
        const {
          data: { booking },
        } = await bookingHistory(token);
        setLoading("success");
        setDataBooking(booking);
      } catch (error) {
        setLoading("error");
        console.log(error.response);
      }
    })();
  }, [token]);

  return (
    <>
      <Navbar />
      <div className="min-h-screem w-full">
        <div className="container mx-auto px-5 lg:px-16 ">
          <div className="text-2xl font-semibold mt-12 mb-12">
            History Booking
          </div>
          {loading === "process" && <div>Loading...</div>}
          {user && (
            <div>
              {dataBooking.length &&
                dataBooking.map((data) => {
                  return <BookingItem key={data._id} data={data} />;
                })}
            </div>
          )}

          {!user && (
            <>
              <div className="mt-24">
                <CardAuthMessage />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
export default HistoryBooking;
