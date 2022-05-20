import { Select, Table } from "antd";
import React, { useEffect, useState } from "react";
import Navbar from "../../../common/sidebar/Sidebar";
import axios from "../../../../config/axiosInstance";
import { Container_Selete, Selete_Filter, Text_Topic, Container_Table, Table_History } from "../styles/History.style";
import Column from "antd/lib/table/Column";
import history from "../mock/history.json";

const { Option } = Select;

//===================== CREATE INTERFACE =====================//
interface IHistory {
  date: string;
  dateTime: Date;
  task: string;
  time: string;
}

function History() {
  const [selectTime, setSelectTime] = useState("สัปดาห์นี้");
  const [tableHistoryData, setTableHistoryData] = useState<IHistory | undefined | any>();

  function handleChange(value: any) {
    console.log(`selected ${value}`);
    setSelectTime(`${value}`);
  }

  // async function ApiGetHistory() {
  //   return await axios
  //     .get("/history?filter=week")
  //     .then((response) => {
  //       setTableHistoryData(response.data["histories"]);
  //       return response.data;
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // }
  console.log("History", tableHistoryData);

  useEffect(() => {
    // ApiGetHistory();
    setTableHistoryData(history["histories"]);
  }, []);
  return (
    <>
      <Navbar />
      <Text_Topic>ประวัติการใช้งานกล่องยา</Text_Topic>
      <Container_Selete>
        <Selete_Filter defaultValue={selectTime} onChange={handleChange}>
          <Option value="สัปดาห์นี้">สัปดาห์นี้</Option>
          <Option value="เดือนนี้">เดือนนี้</Option>
          <Option value="เดือนที่เเล้ว">เดือนที่แล้ว</Option>
        </Selete_Filter>
      </Container_Selete>
      <Container_Table>
        <Table_History dataSource={tableHistoryData} pagination={false} rowClassName={() => "rowClassName1"} key={1}>
          <Column title="เวลา" dataIndex="time" key="time" />
          <Column title="วันที่" dataIndex="date" key="date" />
          <Column title="รายการ" dataIndex="task" key="task" />
        </Table_History>
      </Container_Table>
    </>
  );
}

export default History;
