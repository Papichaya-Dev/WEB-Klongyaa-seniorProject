import React, { useEffect, useState } from "react";
import Navbar from "../../../common/sidebar/Sidebar";
import { ColumnPillName, ContainerTable, TablePillStock, TextTopic } from "../styles/PillStock.style";
import axios from "../../../../config/axiosInstance";
import Column from "antd/lib/table/Column";
import { CheckExpiredToken } from "common/checkExpiredToken";
import { dateFormat } from "utils/DateFormat";
import { IPillStockChannel } from "./pillStock.type";
import { Space, Spin } from "antd";

function PillStock() {
  const [tableData, setTableData] = useState<undefined | any>();

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

  useEffect(() => {
    ApiGetPillStock();
  }, []);
  return (
    <>
      <Navbar />
      <TextTopic>จำนวนยาคงเหลือ</TextTopic>

      {tableData?.length === undefined ? (
        <Space size="middle" style={{ marginLeft: "800px" }}>
          <Spin size="large" />
        </Space>
      ) : (
        <ContainerTable>
          <TablePillStock dataSource={tableData} pagination={false} rowClassName={() => "rowClassName1"}>
            <ColumnPillName title="ช่องที่" dataIndex="id" key="id" />
            <Column title="ชื่อยา" dataIndex="pill_name" key="pill_name" />
            <Column title="จำนวนยาทั้งหมด" dataIndex="stock" key="stock" />
            <Column title="คงเหลือ" dataIndex="total" key="total" />
            <Column title="วันที่บรรจุ" dataIndex="created_at" key="created_at" />
          </TablePillStock>
        </ContainerTable>
      )}
    </>
  );
}

export default PillStock;
