import { Link } from "react-router-dom";

const AlertMessage = ({ data, link }) => {
  console.log(data);
  const { status, message } = data;
  return (
    <div
      className={`capitalize flex rounded-lg p-4 mb-4 text-sm ${
        status === "success"
          ? `bg-green-100 text-green-700`
          : `bg-red-100 text-red-700`
      }`}
      role="alert"
    >
      <div>
        <span className="font-medium">{status} </span>
        {message}
        {link && (
          <Link className="capitalize font-bold underline" to={`/${link}`}>
            {" "}
            {link}
          </Link>
        )}
      </div>
    </div>
  );
};

export default AlertMessage;
