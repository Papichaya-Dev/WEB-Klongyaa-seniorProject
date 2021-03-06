import { Button, Col, Row } from "antd";
import styled from "styled-components";

export const RowContainer = styled(Row)`
  background-color: #dbf6f3;
  width: 80%;
  height: 20vh;

  & .ant-col-12 {
    border: 1px solid #989898;
  }
  & .ant-col-8 {
    border: 1px solid #989898;
  }
`;

export const MainContainer = styled.div`
  margin-left: 400px;
`;

export const ButtonTooltip = styled(Button)`
  position: absolute;
  right: 150px;
  bottom: 50px;
  width: 45px;
  height: 45px;
`;

export const BoxPillChannel = styled(Col)`
  background-color: #fcff7d;
  cursor: pointer;
`;

export const PillChannelNo = styled.div`
  background-color: #eb5f91;
  color: white;
  border-radius: 35px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 140px;
  height: 5vh;
  text-align: center;
  font-size: 18px;
  margin-top: 10px;
`;

export const PillName = styled.div`
  margin-top: 10px;

  text-align: center;
  font-size: 30px;
  color: #3a3055;
  font-weight: bolder;
`;
