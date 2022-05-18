import React, { useState } from "react";
import { IAuth } from "./interface/User.interface";

const AuthContext = React.createContext({});

const AuthProvider = (props: any) => {
  const [accessToken, setAccessToken] = useState("");
  const [refreshToken, setRefreshToken] = useState("");
  const [user, setUser] = useState("");
  const [failedLogin, setFailedLogin] = useState<boolean>(true);

  //   const login = ({email, password}):IAuth => {

  //   }
};
