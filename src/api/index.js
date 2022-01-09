import { axiosConfig as axios } from "./config";

export const login = async (data) => {
  return await axios.post("login", data);
};

export const register = async (data) => {
  return await axios.post("/register", data);
};

export const logout = async (token) => {
  return await axios.post("logout", null, {
    headers: {
      authorization: `Bearer ${token}`,
      Accept: "application/json",
    },
  });
};

export const getPhotos = async () => {
  return await axios.get("/photos");
};

export const category = async () => {
  return await axios.get("/categories");
};

export const booking = async (token, data) => {
  return await axios.post("booking", data, {
    headers: {
      authorization: `Bearer ${token}`,
      Accept: "application/json",
      ContentType: "multipart/form-data",
    },
  });
};

export const bookingHistory = async (token) => {
  return await axios.get("/booking", {
    headers: {
      authorization: `Bearer ${token}`,
      Accept: "application/json",
    },
  });
};
