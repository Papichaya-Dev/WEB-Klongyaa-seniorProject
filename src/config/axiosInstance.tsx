import axios from "axios";

const instance = axios.create({
  //   baseURL: process.env.REACT_APP_API_BASE_URL,
  baseURL: "https://b3e860e2-c15f-46f4-acb8-ac514b4018b5.mock.pstmn.io",
});

console.log(process.env.REACT_APP_API_BASE_URL);

export default instance;
