//======================= CREATE INTERFACR =======================//
export interface IAuth {
  access_token: string;
  refresh_token: string;
  email_or_username: string;
  password: string;
}
