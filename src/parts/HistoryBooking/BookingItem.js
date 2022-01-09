import dateFormat from "dateformat";
import { currencyFormat } from "../../utils/currencyFormat";

const BookingItem = ({ data }) => {
  const { category, session, address, price, status, date_start, time_start } =
    data;
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-between mb-8">
        <div className="flex flex-row">
          <img
            className="h-40 object-cover w-64 rounded-lg"
            src={`${process.env.REACT_APP_BASEURL}/${category.image_url}`}
            alt="dummy-imgs"
          />
          <div className="px-5 font-semibold ">
            <div className="font-bold capitalize mb-3 text-xl">
              {category.title}
            </div>
            <div className="text-sm text-gray-600 mb-3">
              <div>Photo Session : {session}</div>
              <div className="font-bold">
                Date & Time : {dateFormat(date_start, "d  mmmm yyyy,")}{" "}
                {time_start}
              </div>
              <div>Address : {address}</div>
            </div>
            <div className="font-bold text-lg">
              Total {currencyFormat(price)}
            </div>
          </div>
        </div>
        <div className="font-semibold">
          <p>Payment & Order Status</p>
          {status === "process" ? (
            <p className="font-bold text-red-600 capitalize">{status}</p>
          ) : (
            <p className="font-bold text-green-600 capitalize">{status}</p>
          )}
        </div>
      </div>
    </>
  );
};

export default BookingItem;
