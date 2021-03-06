import styled from "styled-components";
import sidebar from "../../../shared/images/sidebar.png";
import pill_profile from "../../../shared/images/pill_profile.png";
import logout_button from "../../../shared/images/logout.png";
import { Button } from "antd";

export const Sidebar = styled.div`
  background-image: url(${sidebar});
  width: 250px;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const PillProfile = styled.div`
  background-image: url(${pill_profile});
  width: 130px;
  height: 130px;
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: 30px;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

export const TextCenter = styled.div`
  text-align: center;
  color: white;
  margin-top: 15px;
  margin-bottom: 15px;
`;

export const LogoutButton = styled(Button)`
  color: #f25f5f;
  border-radius: 15px;
  font-size: 18px;
  position: absolute;
  width: 55%;
  bottom: 40px;
  margin-left: 45px;
`;

export const LogoutImage = styled.div`
  background-image: url(${logout_button});
  width: 40px;
  height: 40px;
  position: absolute;
  width: 50%;
  bottom: 35px;
  left: 45%;
  background-repeat: no-repeat;
  background-position: center;
`;
