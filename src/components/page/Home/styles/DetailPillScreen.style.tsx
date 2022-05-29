import { Alert, AutoComplete, Button, Input } from "antd";
import styled from "styled-components";
import back_icon from "../image/back_button.png";

export const TextTopic = styled.div`
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

export const TextPillName = styled.div`
  font-size: 22px;
  margin-left: 25%;
  padding-top: 100px;
  margin-bottom: 10px;
`;

export const SpanField = styled.span`
  margin-left: 20px;
`;

export const InputPillName = styled(Input)`
  border-radius: 5px;
  background-color: #f9f9f9;
  width: 250px;
  font-size: 22px;

  .ant-input[disabled] {
    font-size: 24px;
    background-color: #c21616 !important;
  }
`;

export const TextTask = styled.div`
  font-size: 22px;
  margin-left: 25%;
  padding-top: 10px;
  margin-bottom: 10px;
`;

export const ContainerMainPillName = styled.div`
  position: absolute;
  left: 30%;
  width: 628px;
  height: 25vh;
  background-color: #fcffaf;
  border-radius: 20px;
`;

export const SpanMainPillName = styled.span`
  margin-left: 20px;
  font-size: 22px;
  padding-left: 10px;
`;

export const InputMainPillName = styled(AutoComplete)`
  width: 250px !important;
  font-size: 20px;
  margin-left: 30px;
  height: 5vh;

  & .ant-input[disabled] {
    font-size: 24px;
  }
  & .ant-select-selector {
    border-radius: 5px !important;
    height: 5vh !important;
  }
`;

export const ButtonSave = styled(Button)`
  border-radius: 35px;
  width: 25%;
  height: 6vh;
  background-color: #f9f9f9;
  font-size: 18px;
  position: absolute;
  left: 35%;
  top: 64%;
`;

export const BoxMainPillName = styled.div`
  margin-top: 20px;
`;

export const LineHorizontal = styled.hr`
  background-color: #e9e9e9;
  height: 2px;
  border: none;
  width: 50%;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const TextCheckInput = styled.div`
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

export const TextTopicFeature = styled.div`
  font-size: 22px;
  margin-left: 25%;
  padding-top: 230px;
  margin-bottom: 10px;
`;

export const TextTopicProperties = styled.div`
  font-size: 22px;
  margin-left: 25%;
  margin-bottom: 10px;
`;

export const SpanFieldProperties = styled.span`
  margin-left: 20px;
  color: #54c472;
  font-weight: 300;
`;

export const SpanFieldEffect = styled.span`
  margin-left: 20px;
  color: #ff0000;
  font-weight: 300;
`;

export const ButtonDontEat = styled(Button)`
  position: absolute;
  width: 40px;
  height: 40px;
  z-index: 1;
  margin-left: 10px;
`;

export const SpanFieldDontEat = styled.span`
  margin-left: 50px;
  color: #ff0000;
  font-weight: 300;
`;

export const SpanTooltipDontEat = styled.span`
  margin-left: 10px;
  font-weight: 300;
`;

export const ProhibitionBox = styled.div`
  padding-left: 20%;
  transform: translateY(-35px);
  font-weight: 300;
  color: #ff0000;
`;

export const BackButton = styled.div`
  background-image: url(${back_icon});
  width: 60px;
  height: 60px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin-left: 280px;
  transform: translateY(30px);
  cursor: pointer;
`;
