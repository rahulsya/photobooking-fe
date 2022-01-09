import { ReactComponent as AuthSvg } from "../../assets/secure.svg";
import { Link } from "react-router-dom";

const CardAuthMessage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <AuthSvg />
      <div className="font-semibold capitalize">
        Oops, we need your account please{" "}
        <Link className="font-bold text-yellow-500 underline" to="/login">
          Login!
        </Link>
      </div>
    </div>
  );
};

export default CardAuthMessage;
