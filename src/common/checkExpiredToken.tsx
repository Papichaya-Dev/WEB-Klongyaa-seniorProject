import jwtDecode from "jwt-decode";
import axios from "../config/axiosInstance";

interface IJwtToken {
  email: string;
  exp: number;
  iat: number;
  sub: string;
  username: string;
}

export async function CheckExpiredToken(): Promise<string> {
  let accessToken: string | null = localStorage.getItem("accessToken");
  if (accessToken) {
    try {
      jwtDecode(accessToken);
      const tokenDecode: IJwtToken = jwtDecode(accessToken);
      // const { exp } = jwtDecode(refreshToken);
      if (Date.now() >= tokenDecode.exp * 1000) {
        await refreshTokenFunc();
        accessToken = localStorage.getItem("accessToken");
      }

      return accessToken !== null ? accessToken : "";
    } catch (err) {
      console.log(err);
      return "";
    }
  } else {
    return "";
  }
}

async function refreshTokenFunc() {
  const refreshToken: any = localStorage.getItem("refreshToken");
  return await axios
    .post("/auth/refreshToken", {}, { headers: { Authorization: `Bearer ${refreshToken}` } })
    .then((response) => {
      if (response.data.access_token) localStorage.setItem("accessToken", response.data.access_token);
      if (response.data.refresh_token) localStorage.setItem("refreshToken", response.data.refresh_token);
    })
    .catch((err) => {
      console.error("ERROR CANNOT LOGIN", err);
    });
}
