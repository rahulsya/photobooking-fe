import { useContext, createContext, useState } from "react";

const authContext = createContext();
export const useAuth = () => useContext(authContext);

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(
    localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null
  );
  const [token, setToken] = useState(
    localStorage.getItem("token")
      ? JSON.parse(localStorage.getItem("token"))
      : null
  );

  const saveDataLogin = ({ token, user }) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", JSON.stringify(token));

    setToken(token);
    setUser(user);
  };

  const clearDataLogin = () => {
    localStorage.setItem("user", null);
    localStorage.setItem("token", null);
    setToken(null);
    setUser(null);
  };

  const data = {
    user,
    token,
    saveDataLogin,
    clearDataLogin,
  };

  return <authContext.Provider value={data}>{children}</authContext.Provider>;
};
