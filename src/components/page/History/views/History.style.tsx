import { Select, Table } from "antd";
import styled from "styled-components";

export const Text_Topic = styled.div`
  font-weight: bolder;
  font-size: 36px;
  text-align: center;
  padding-top: 50px;
  padding-bottom: 20px;
  padding-left: 100px;
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

export const Container_Selete = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 48%;
`;

export const Container_Table = styled.div`
  margin-left: 450px;
  margin-top: 20px;
  width: 750px;
`;

export const Table_History = styled(Table)`
  & .ant-table-container table {
    width: 100%;
    font-size: 18px;
    background-color: #f5f5f5;
  }

  & .ant-table-thead > tr > th {
    font-size: 20px;
    background-color: #3a3055;
    color: white;
  }
`;
