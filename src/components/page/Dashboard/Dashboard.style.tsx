import styled from "styled-components";
import background_dashboard from "../../../shared/images/background_dashboard.png";
import { Button, Input, Modal } from "antd";
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

export const Modal_Login = styled(Modal)`
  & .ant-modal-footer {
    border: none;
  }
  & .ant-modal-header {
    border: none;
    border-radius: 30px !important;
  }
  & .ant-modal-title {
    text-align: center;
    font-weight: bolder;
    font-size: 35px;
    padding: 24px;
  }
  & .ant-modal-content {
    border-radius: 30px !important;
  }
`;

export const Input_Email = styled(Input)`
  margin: 0;
  border-radius: 30px;
  margin-bottom: 30px;
  height: 50px;
  font-size: 24px;
  border-color: #a2b4fa;
`;

export const Input_Password = styled(Input.Password)`
  margin: 0;
  border-radius: 30px;
  height: 50px;
  font-size: 24px;
  border-color: #a2b4fa;
  margin-bottom: 10px;
`;

export const Forget_Password = styled.div`
  color: #a2b4fa;
  text-align: right;
  font-size: 16px;
`;

export const Button_Login_Form = styled(Button)`
  border-radius: 30px;
  background-color: #eb5f91;
  color: white;
  height: 50px;
  font-size: 16px;
  margin: 0 auto;
  display: block;
  width: 213px;
`;
