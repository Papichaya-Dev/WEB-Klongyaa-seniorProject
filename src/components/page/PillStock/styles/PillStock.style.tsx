import { Table } from "antd";
import Column from "antd/lib/table/Column";
import styled from "styled-components";

export const TextTopic = styled.div`
  font-weight: bolder;
  font-size: 36px;
  text-align: center;
  padding-top: 50px;
  padding-bottom: 20px;
  padding-left: 100px;
`;

export const ContainerTable = styled.div`
  margin-left: 350px;
`;

export const TablePillStock = styled(Table)`
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

export const ColumnPillName = styled(Column)`
  background-color: red;
  font-size: 50px;
`;
