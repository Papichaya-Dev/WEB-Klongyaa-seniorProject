import { Alert, Button, Input } from "antd";
import styled from "styled-components";
import back_icon from "../image/back_button.png";

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
  width: 250px;
  font-size: 22px;
  margin-left: 30px;

  & .ant-input[disabled] {
    font-size: 24px;
  }
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
  width: 20%;
  background-color: #c8eee2;
  border-color: #c8eee2;
  text-align: center;
  position: absolute;
  left: 40%;
  top: 5%;
  font-size: 24px;
  z-index: 1;
  font-weight: normal;

  .ant-alert-message {
    color: #125d45;
  }
`;

export const Text_Topic_Feature = styled.div`
  font-size: 22px;
  margin-left: 25%;
  padding-top: 230px;
  margin-bottom: 10px;
`;

export const Text_Topic_Properties = styled.div`
  font-size: 22px;
  margin-left: 25%;
  margin-bottom: 10px;
`;

export const Span_Field_Properties = styled.span`
  margin-left: 20px;
  color: #ff0000;
  font-weight: 300;
`;

export const Button_Dont_Eat = styled(Button)`
  position: absolute;
  width: 40px;
  height: 40px;
  z-index: 1;
  margin-left: 10px;
`;

export const Span_Field_Dont_Eat = styled.span`
  margin-left: 50px;
  color: #ff0000;
  font-weight: 300;
`;

export const Span_Tooltip_Dont_Eat = styled.span`
  margin-left: 10px;
  font-weight: 300;
`;

export const Prohibition_Box = styled.div`
  padding-left: 20%;
  transform: translateY(-35px);
  font-weight: 300;
  color: #ff0000;
`;

export const Back_Button = styled(Button)`
  background-image: url(${back_icon});
  width: 45px;
  height: 45px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  max-width: 30px;
  height: 30px;
  display: block;
  margin-left: auto;
`;
