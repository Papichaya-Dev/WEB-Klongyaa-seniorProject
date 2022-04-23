import styled from "styled-components";
import background_dashboard from "../../../shared/images/background_dashboard.png";
import { Button } from "antd";
export const Background = styled.div`
  background-image: url(${background_dashboard});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  max-width: 100%;
  height: 100vh;
`;

export const Text_Header = styled.div`
  font-weight: 400;
  font-size: 24px;
  padding-left: 150px;
  padding-top: 300px;
`;

export const Text_Login = styled.div`
  font-weight: bolder;
  font-size: 42px;
  padding-left: 150px;
  padding-top: 20px;
`;

export const Button_Login = styled(Button)`
  background-color: #f7faa1;
  width: 250px;
  height: 60px;
  margin-left: 250px;
  margin-top: 50px;
  font-size: 24px;
  border-radius: 35px;
  border: none;
`;
