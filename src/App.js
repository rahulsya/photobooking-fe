import { Routes, Route } from "react-router-dom";
import { Home, Login, BookingForm, HistoryBooking, Register } from "./pages";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="booking-form" element={<BookingForm />} />
        <Route path="booking" element={<HistoryBooking />} />
      </Routes>
    </>
  );
}

export default App;
