import axios from "../../../../config/axiosInstance";

//----------------------- @GET PILL CHANNEL DATAS -----------------------//
export async function ApiGetPillChannelDatas() {
  return await axios
    .get("/pillChannelDatas")
    .then((response) => {
      console.log("Pill channel datas :", response.data);
      return response.data;
    })
    .catch((err) => {
      console.error(err);
    });
}
