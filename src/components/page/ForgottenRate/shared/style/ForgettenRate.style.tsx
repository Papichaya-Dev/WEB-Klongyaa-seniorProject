import { Col, Select } from "antd";
import styled from "styled-components";
import calendar from "../images/calendar.png";
import ReactApexChart from "react-apexcharts";

export const Text_Topic = styled.div`
  font-weight: bolder;
  font-size: 36px;
  text-align: center;
  padding-top: 50px;
  padding-bottom: 20px;
  padding-left: 100px;
`;

export const Calendar_Icon = styled.div`
  background-image: url(${calendar});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  max-width: 30px;
  height: 30px;
  display: block;
  margin-left: auto;
`;

export const Row_Container_Date = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 310px;
`;

export const Col_Date = styled(Col)`
  font-size: 24px;
  padding-left: 10px;
`;

export const Chart_ForgettenRate_Week = styled(ReactApexChart)`
  width: 50%;
  height: 80vh;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 150px;
  margin-top: 20px;
`;

export const Selete_Filter = styled(Select)`
  & .ant-select-selector {
    border-radius: 10px !important;
    background-color: #f4f4f4 !important;
    cursor: pointer;
    padding-left: 10px;
    width: 130px !important;
  }
`;
