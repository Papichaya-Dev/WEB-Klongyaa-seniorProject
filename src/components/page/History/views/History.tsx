import { Select } from "antd";
import React, { useEffect, useState } from "react";
import Navbar from "../../../common/sidebar/Sidebar";
import axios from "../../../../config/axiosInstance";
import { ContainerSelect, ContainerTable, SeleteFilter, TableHistory, TextTopic } from "../styles/History.style";
import Column from "antd/lib/table/Column";
import { CheckExpiredToken } from "common/checkExpiredToken";
import { dateFormat, timeFormat } from "utils/DateFormat";
import { Selete_Filter } from "components/page/ForgottenRate/shared/style/ForgettenRate.style";
import { Container_Table } from "components/page/PillStock/styles/PillStock.style";

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
  const [tableHistoryWeek, setTableHistoryWeek] = useState<IHistory[]>([]);
  const [tableHistoryMonth, setTableHistoryMonth] = useState<IHistory[]>([]);
  const [tableHistoryLastMonth, setTableHistoryLastMonth] = useState<IHistory[]>([]);

  function handleChange(value: any) {
    console.log(`selected ${value}`);
    setSelectTime(`${value}`);
  }

  async function ApiGetHistoryWeek() {
    const accessToken: string = await CheckExpiredToken();
    return await axios.get("/pill-data/getHistory/week", { headers: { Authorization: `Bearer ${accessToken}` } }).then((response) => {
      let data = response.data["histories"];
      let dataFormat = data?.map((item: any) => {
        item.date = dateFormat(item.date_time);
        item.time = timeFormat(item.date_time);
        return item;
      });

      let dateSort = dataFormat?.sort(function (a: any, b: any) {
        return new Date(b.date_time).getTime() - new Date(a.date_time).getTime();
      });

      setTableHistoryWeek(dateSort);
      console.log("[History week]", dataFormat);

      return response.data;
    });
  }

  async function ApiGetHistoryMonth() {
    const accessToken: string = await CheckExpiredToken();
    return await axios
      .get("/pill-data/getHistory/month", { headers: { Authorization: `Bearer ${accessToken}` } })
      .then((response) => {
        let data = response.data["histories"];
        let dataFormat = data?.map((item: any) => {
          item.date = dateFormat(item.date_time);
          item.time = timeFormat(item.date_time);
          return item;
        });
        let dateSort = dataFormat?.sort(function (a: any, b: any) {
          return new Date(b.date_time).getTime() - new Date(a.date_time).getTime();
        });

        setTableHistoryMonth(dateSort);

        return response.data;
      })
      .catch((err) => {
        console.error(err);
      });
  }
  async function ApiGetHistoryLastMonth() {
    const accessToken: string = await CheckExpiredToken();
    return await axios
      .get("/pill-data/getHistory/last_month", { headers: { Authorization: `Bearer ${accessToken}` } })
      .then((response) => {
        let data = response.data["histories"];
        let dataFormat = data?.map((item: any) => {
          item.date = dateFormat(item.date_time);
          item.time = timeFormat(item.date_time);
          return item;
        });
        let dateSort = dataFormat?.sort(function (a: any, b: any) {
          return new Date(b.date_time).getTime() - new Date(a.date_time).getTime();
        });

        setTableHistoryLastMonth(dateSort);

        return response.data;
      })
      .catch((err) => {
        console.error(err);
      });
  }

  useEffect(() => {
    ApiGetHistoryWeek();
    ApiGetHistoryMonth();
    ApiGetHistoryLastMonth();
  }, []);
  return (
    <>
      <Navbar />
      <TextTopic>ประวัติการใช้งานกล่องยา</TextTopic>
      <ContainerSelect>
        <SeleteFilter defaultValue={selectTime} onChange={handleChange}>
          <Option value="สัปดาห์นี้">สัปดาห์นี้</Option>
          <Option value="เดือนนี้">เดือนนี้</Option>
          <Option value="เดือนที่เเล้ว">เดือนที่แล้ว</Option>
        </SeleteFilter>
      </ContainerSelect>
      {selectTime === "สัปดาห์นี้" ? (
        <ContainerTable>
          <TableHistory dataSource={tableHistoryWeek} pagination={false} rowClassName={() => "rowClassName1"} key={1}>
            <Column title="เวลา" dataIndex="time" key="date_time" />
            <Column title="วันที่" dataIndex="date" key="date" />
            <Column title="ชื่อยา" dataIndex="pill_name" key="pill_name" />
            <Column title="รายการ" dataIndex="task" key="task" />
          </TableHistory>
        </ContainerTable>
      ) : selectTime === "เดือนนี้" ? (
        <ContainerTable>
          <TableHistory dataSource={tableHistoryMonth} pagination={false} rowClassName={() => "rowClassName1"} key={1}>
            <Column title="เวลา" dataIndex="time" key="date_time" />
            <Column title="วันที่" dataIndex="date" key="date" />
            <Column title="ชื่อยา" dataIndex="pill_name" key="pill_name" />
            <Column title="รายการ" dataIndex="task" key="task" />
          </TableHistory>
        </ContainerTable>
      ) : (
        <ContainerTable>
          <TableHistory dataSource={tableHistoryLastMonth} pagination={false} rowClassName={() => "rowClassName1"} key={1}>
            <Column title="เวลา" dataIndex="time" key="date_time" />
            <Column title="วันที่" dataIndex="date" key="date" />
            <Column title="ชื่อยา" dataIndex="pill_name" key="pill_name" />
            <Column title="รายการ" dataIndex="task" key="task" />
          </TableHistory>
        </ContainerTable>
      )}
    </>
  );
}

export default History;
