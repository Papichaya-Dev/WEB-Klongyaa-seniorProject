import React, { useEffect, useState } from "react";
import Navbar from "../../../common/sidebar/Sidebar";
import { Column_PillName, Container_Table, Table_PillStock, Text_Topic } from "../styles/PillStock.style";
import axios from "../../../../config/axiosInstance";
import Column from "antd/lib/table/Column";
import { CheckExpiredToken } from "common/checkExpiredToken";
import { dateFormat } from "utils/DateFormat";

interface IPillStockChannel {
  channel_id: string;
  pill_name: string;
  total: number;
  stock: number;
  created_at: string;
  cid?: string;
  take_time?: string[];
}

function PillStock() {
  const [tableData, setTableData] = useState<any | undefined>();

  function isInArray(index: number, arr: IPillStockChannel[]) {
    let flag = 0;
    arr?.map((item) => {
      if (index.toString() === item.channel_id) flag = 1;
    });
    return flag === 0 ? false : true;
  }

  async function ApiGetPillStock() {
    const accessToken: string = await CheckExpiredToken();
    return await axios.get("/pill-data/getPillStock", { headers: { Authorization: `Bearer ${accessToken}` } }).then((response) => {
      console.log("Pill channel datas :", response.data["pillStock"]);
      let arr = [];
      let pillStockArr: IPillStockChannel[] = response.data["pillStock"];
      for (let i = 1; i <= 7; i++) {
        const data = pillStockArr.filter((pill) => pill.channel_id === i.toString() && dateFormat(pill.created_at));
        if (data.length > 0) {
          arr.push({
            id: data[0].channel_id,
            pill_name: data[0]["pill_name"],
            total: data[0]["total"],
            stock: data[0]["stock"],
            created_at: dateFormat(pillStockArr[0].created_at),
          });
        } else {
          arr.push({
            id: i,
            pill_name: "-",
            total: "-",
            stock: "-",
            created_at: "-",
          });
        }
      }
      setTableData(arr);
    });
  }
  console.log("TABLE PILL :", tableData);

  useEffect(() => {
    ApiGetPillStock();
  }, []);
  return (
    <>
      <Navbar />
      <Text_Topic>จำนวนยาคงเหลือ</Text_Topic>
      <Container_Table>
        <Table_PillStock dataSource={tableData} pagination={false} rowClassName={() => "rowClassName1"}>
          <Column_PillName title="ช่องที่" dataIndex="id" key="id" />
          <Column title="ชื่อยา" dataIndex="pill_name" key="pill_name" />
          <Column title="จำนวนยาทั้งหมด" dataIndex="total" key="total" />
          <Column title="คงเหลือ" dataIndex="stock" key="stock" />
          <Column title="วันที่บรรจุ" dataIndex="created_at" key="created_at" />
        </Table_PillStock>
      </Container_Table>
    </>
  );
}

export default PillStock;
