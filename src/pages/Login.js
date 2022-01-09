import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { Navbar, InputText, AlertMessage } from "../components";
import { login } from "../api";
import { useAuth } from "../context/AuthContext";

function Login() {
  const navigate = useNavigate();
  const { saveDataLogin } = useAuth();
  const [status, setStatus] = useState("idle");
  const [statusMessage, setStatusMessage] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async ({ username, password }) => {
    setStatus("process");
    const { data } = await login({ username, password });

    if (data.status === "error") {
      setStatus("error");
      setStatusMessage(data);
      // console.log(data);
    } else {
      // navigate to home
      setStatus("success");
      navigate("/", { replace: true });
      saveDataLogin(data);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center h-screen mt-0 lg:-mt-24">
        <div className="px-5 py-5 w-full lg:w-1/4 pb-4 shadow-lg rounded-lg">
          {status === "error" && <AlertMessage data={statusMessage} />}
          <div className="items-start font-semibold text-xl py-4">
            Login User
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <InputText
              {...register("username", { required: true })}
              name="username"
              placeholder="your username"
              errors={errors.username}
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
              value="Login"
              className="cursor-pointer w-full mt-6 mb-3 bg-indigo-100 rounded-lg px-4 py-2 text-lg text-gray-800 tracking-wide font-semibold font-sans"
            />
          </form>
          <div>
            <span>
              Belum Memiliki akun ?
              <p className="font-bold text-blue-500">Register</p>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
