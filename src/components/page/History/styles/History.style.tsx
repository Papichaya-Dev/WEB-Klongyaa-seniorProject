import { Select, Table } from "antd";
import styled from "styled-components";

export const TextTopic = styled.div`
  font-weight: bolder;
  font-size: 36px;
  text-align: center;
  padding-top: 50px;
  padding-bottom: 20px;
  padding-left: 100px;
`;

export const SeleteFilter = styled(Select)`
  & .ant-select-selector {
    border-radius: 10px !important;
    background-color: #f4f4f4 !important;
    cursor: pointer;
    padding-left: 10px;
    width: 130px !important;
  }
`;

export const ContainerSelect = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 48%;
`;

export const ContainerTable = styled.div`
  margin-left: 450px;
  margin-top: 20px;
  width: 750px;
  margin-bottom: 20px;
`;

export const TableHistory = styled(Table)`
  & .ant-table-container table {
    width: 100%;
    font-size: 18px;
    background-color: #f5f5f5;
  }

  & .ant-table-container {
    margin-bottom: 50px !important ;
  }

  & .ant-table-thead > tr > th {
    font-size: 20px;
    background-color: #3a3055;
    color: white;
  }
`;
