import { Table } from "antd";
import Column from "antd/lib/table/Column";
import styled from "styled-components";

export const Text_Topic = styled.div`
  font-weight: bolder;
  font-size: 36px;
  text-align: center;
  padding-top: 50px;
  padding-bottom: 20px;
  padding-left: 100px;
`;

export const Container_Table = styled.div`
  margin-left: 350px;
`;

export const Table_PillStock = styled(Table)`
  & .ant-table-container table {
    text-align: center;
    width: 85%;
    font-size: 18px;
  }

  & .ant-table-thead > tr > th {
    text-align: center;
    font-size: 20px;
  }
`;

export const Column_PillName = styled(Column)`
  background-color: red;
  font-size: 50px;
`;
