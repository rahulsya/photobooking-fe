import { useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, Link } from "react-router-dom";
import { ReactComponent as ProcessSVG } from "../assets/process_ic.svg";
import { ReactComponent as SuccessOrcerSVG } from "../assets/success_order_ic.svg";
import BCA from "../assets/bca.png";
import BNI from "../assets/bni.png";
import { currencyFormat } from "../utils/currencyFormat";

import {
  Navbar,
  CardCategory,
  InputText,
  CardAuthMessage,
} from "../components";
import { useAuth } from "../context/AuthContext";
import { booking } from "../api/index";

export default function BookingForm() {
  const {
    state: { category },
  } = useLocation();
  const [price] = useState(category.price);

  const { user, token } = useAuth();
  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
  } = useForm();
  const session = watch("session", 1);

  const [status, setStatus] = useState("idle");

  const onSubmit = (data) => {
    const { file_image, ...datas } = data;
    const { session, address, date, time } = datas;
    const payload = new FormData();
    payload.append("session", session);
    payload.append("address", address);
    payload.append("date", date);
    payload.append("time", time);
    payload.append("price", session * price);
    payload.append("category_id", category._id);
    payload.append("image", file_image[0]);

    setStatus("process");
    booking(token, payload)
      .then((response) => {
        setStatus("success");
        console.log(response.data);
      })
      .catch((error) => {
        setStatus("error");
        console.log(error.message);
      });
  };

  if (status === "process") {
    return (
      <>
        <Navbar />
        <div className=" w-full">
          <div className="container mx-auto px-5 lg:px-16 ">
            <div className="flex flex-col justify-center items-center mt-40">
              <ProcessSVG />
              <div className="capitalize font-semibold text-lg mt-10">
                your order is process...
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  if (status === "success") {
    return (
      <>
        <Navbar />
        <div className=" w-full">
          <div className="container mx-auto px-5 lg:px-16 ">
            <div className="flex flex-col justify-center items-center mt-40">
              <SuccessOrcerSVG />
              <div className="capitalize font-semibold text-lg mt-10">
                your order is completed
              </div>
              <Link
                className="font-bold text-yellow-500 underline"
                to="/booking"
              >
                Check Detail Order
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-full w-full">
        <div className="container mx-auto px-5 lg:px-16 ">
          {user && (
            <>
              <div className="text-2xl font-semibold mt-12 mb-12">
                Booking Form
              </div>
              <div className="flex flex-col lg:flex-row items-start">
                <div className="w-full sm:w-full lg:w-1/2 mr-8 ">
                  <CardCategory data={category} />
                  <div className="text-lg font-semibold mt-5">Back Account</div>
                  <div className="text-gray-500 rounded-lg shadow-md mb-4 py-3 px-3 flex items-center justify-between">
                    <img
                      src={BCA}
                      alt="bca-logo"
                      className="object-cover h-16"
                    />
                    <div className="text-sm font-semibold px-2">
                      4929-4415-6787-1195 (rahul Sya)
                    </div>
                  </div>

                  <div className="text-gray-500 rounded-lg shadow-md mb-4 py-6 px-3 flex justify-between">
                    <img
                      src={BNI}
                      alt="bni-logo"
                      className="object-cover h-8"
                    />
                    <div className="text-sm font-semibold px-2">
                      4929-4415-6787-1195 (rahul Sya)
                    </div>
                  </div>
                </div>
                <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
                  <InputText
                    {...register("session", { required: true })}
                    name="session"
                    type="number"
                    defaultValue={1}
                    placeholder="session"
                    errors={errors.session}
                  />
                  <InputText
                    {...register("date", { required: true })}
                    title="Date"
                    name="date"
                    type="date"
                    placeholder="Date"
                    errors={errors.date}
                  />
                  <InputText
                    {...register("time", { required: true })}
                    title="Time"
                    name="time"
                    type="time"
                    placeholder="time"
                    errors={errors.time}
                  />
                  <InputText
                    {...register("address", { required: true })}
                    name="address"
                    placeholder="your location"
                    errors={errors.address}
                  />
                  <InputText
                    {...register("file_image", { required: true })}
                    title="upload proof payment"
                    name="file_image"
                    type="file"
                    placeholder="upload image proof payment"
                    errors={errors.file_image}
                  />

                  <div className="mt-6 text-lg font-semibold">
                    Total Price :{currencyFormat(price * session)}
                  </div>
                  <input
                    className="mt-6 cursor-pointer py-3 px-4 bg-purple-600 text-white rounded"
                    type="submit"
                    value="Complete Booking"
                  />
                </form>
              </div>
            </>
          )}
          {!user && (
            <>
              <div className="mt-32">
                <CardAuthMessage />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
