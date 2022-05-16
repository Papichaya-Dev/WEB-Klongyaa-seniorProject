import { Button, Row } from "antd";
import styled from "styled-components";

export const Row_Container = styled(Row)`
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

export const Main_Container = styled.div`
  margin-left: 400px;
`;

export const Button_Tooltip = styled(Button)`
  position: absolute;
  right: 150px;
  bottom: 50px;
  width: 45px;
  height: 45px;
`;
