import axios from "../../../../config/axiosInstance";

//----------------------- @GET PILL STOCK DATA -----------------------//
export async function ApiGetPillStock() {
  return await axios
    .get("/pillStock")
    .then((response) => {
      console.log("Pill channel datas :", response.data);
      return response.data;
    })
    .catch((err) => {
      console.error(err);
    });
}
