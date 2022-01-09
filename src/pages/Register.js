import { useState } from "react";
import { useForm } from "react-hook-form";
import { InputText, AlertMessage } from "../components";
import { register as APIRegister } from "../api";

const Register = () => {
  const [status, setStatus] = useState("idle");
  const [statusMessage, setStatusMessage] = useState([]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      password: "",
      email: "",
    },
  });
  const onSubmit = async (payload) => {
    const { data } = await APIRegister(payload);
    if (data.status === "error") {
      console.log(data);
      setStatus("error");
      setStatusMessage(data);
    } else {
      setStatus("success");
      reset();
    }
  };
  return (
    <>
      <div className="w-full min-h-screen flex flex-col justify-center">
        <div className="container mx-auto px-5 lg:px-25 w-full md:w-2/5 lg:w-1/4 ">
          {status === "success" && (
            <AlertMessage
              data={{ status: "success", message: "data created" }}
              link="login"
            />
          )}
          {status === "error" && <AlertMessage data={statusMessage} />}
          <div className="px-5 pb-4 shadow-lg rounded-lg">
            <div className="items-start font-semibold text-xl py-4">
              Register New Account
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <InputText
                {...register("name", { required: true })}
                name="name"
                title="username"
                placeholder="your username"
                errors={errors.name}
              />
              <InputText
                {...register("email", {
                  required: true,
                  pattern: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                })}
                type="email"
                name="email"
                title="Email"
                placeholder="ex.. username@email.com"
                errors={errors.email}
              />
              <InputText
                {...register("password", { required: true })}
                name="password"
                type="password"
                placeholder="Input your password"
                errors={errors.password}
              />
              <input
                type="submit"
                value="Register"
                className="cursor-pointer w-full mt-6 mb-3 bg-indigo-100 rounded-lg px-4 py-2 text-lg text-gray-800 tracking-wide font-semibold font-sans"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
