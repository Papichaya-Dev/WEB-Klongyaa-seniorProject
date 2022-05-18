import React from "react";

//======================= CREATE INTERFACR =======================//
interface IAuth {
  accessToken: string;
  refreshToken: string;
  email: string;
  password: string;
}

const AuthContext = React.createContext({});

const AuthProvider = (props: any) => {};
