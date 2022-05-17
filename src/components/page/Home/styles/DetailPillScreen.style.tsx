import { Alert, Button, Input } from "antd";
import styled from "styled-components";

export const Text_Topic = styled.div`
  font-weight: bolder;
  font-size: 28px;
  background-color: #eb5f91;
  text-align: center;
  position: absolute;
  left: 40%;
  top: 5%;
  width: 300px;
  border-radius: 35px;
  color: white;
  font-weight: normal;
`;

export const Text_Pill_Name = styled.div`
  font-size: 22px;
  margin-left: 25%;
  padding-top: 100px;
  margin-bottom: 10px;
`;

export const Span_Field = styled.span`
  margin-left: 20px;
`;

export const Input_Pill_Name = styled(Input)`
  border-radius: 5px;
  background-color: #f9f9f9;
  width: 250px;
  font-size: 22px;

  & .ant-input[disabled] {
    font-size: 24px;
  }
`;

export const Text_Task = styled.div`
  font-size: 22px;
  margin-left: 25%;
  padding-top: 10px;
  margin-bottom: 10px;
`;

export const Container_Main_Pill_Name = styled.div`
  position: absolute;
  left: 30%;
  width: 628px;
  height: 25vh;
  background-color: #fcffaf;
  border-radius: 20px;
`;

export const Span_Main_Pill_Name = styled.span`
  margin-left: 20px;
  font-size: 22px;
  padding-left: 10px;
`;

export const Input_Main_Pill_Name = styled(Input)`
  border-radius: 5px;
  margin-left: 10px;
  width: 250px;
`;

export const Button_Save = styled(Button)`
  border-radius: 35px;
  width: 25%;
  height: 6vh;
  background-color: #f9f9f9;
  font-size: 18px;
  position: absolute;
  left: 35%;
  top: 64%;
`;

export const Box_Main_Pill_Name = styled.div`
  margin-top: 20px;
`;

export const Line_Horizontal = styled.hr`
  background-color: #e9e9e9;
  height: 2px;
  border: none;
  width: 50%;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Text_Check_Input = styled.div`
  text-align: center;
  color: red;
  font-weight: 400;
  margin-bottom: 20px;
  font-size: 18px;
`;

export const NotificationCreatedPostSuccess = styled(Alert)`
  border-radius: 30px;
  width: 35%;
  background-color: #c8eee2;
  border-color: #c8eee2;
  font-weight: bolder;
  margin-left: auto;
  margin-right: auto;
  position: fixed;
  top: 10%;
  left: 32%;
  z-index: 9999;
  .ant-alert-message {
    color: #125d45;
  }
`;
