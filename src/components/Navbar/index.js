import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { logout } from "../../api";

function Navbar() {
  const { user, token, clearDataLogin } = useAuth();
  const active = ({ isActive }) =>
    isActive ? { color: "#FBBF24" } : undefined;

  const onLogout = () => {
    logout(token)
      .then(({ data }) => {
        clearDataLogin();
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  return (
    <div className="bg-gray-800">
      <div className="flex py-5 justify-between container mx-auto px-5 lg:px-16 ">
        <div className="text-2xl text-white font-semibold">NewWaves</div>
        <div className="flex text-white font-semibold">
          <NavLink style={active} className="pl-5" to="/">
            Home
          </NavLink>
          <NavLink style={active} className="pl-5" to="/booking">
            Booking
          </NavLink>
          {user ? (
            <div className="pl-5 cursor-pointer" onClick={onLogout}>
              Logout
            </div>
          ) : (
            <>
              <NavLink style={active} className="pl-5" to="/login">
                Login
              </NavLink>
              <NavLink style={active} className="pl-5" to="/register">
                Register
              </NavLink>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
