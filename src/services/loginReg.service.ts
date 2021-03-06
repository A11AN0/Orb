import axios from "axios";

export interface LoginData {
  email: String;
  password: String;
}

export const deliverLogInData = async (dataObject: LoginData) => {
  const res = await axios.post("http://localhost:7777/register", dataObject);
  console.log(res.data);
  return res.data;
};

export const verifyLogInData = async (dataObject: LoginData) => {
  const res = await axios.post("http://localhost:7777/login", dataObject);
  console.log(await res.data);
  return res.data;
};
