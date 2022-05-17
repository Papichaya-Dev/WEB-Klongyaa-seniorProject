import React, { useEffect, useState } from "react";
import Navbar from "../../../common/Sidebar";
import { Column_PillName, Container_Table, Table_PillStock, Text_Topic } from "../styles/PillStock.style";
import axios from "../../../../config/axiosInstance";
import Column from "antd/lib/table/Column";
import pillStocks from "../mock/pillStocks.json";

interface IPillStockChannel {
  channel_id: number;
  pill_name: string;
  total: number;
  stock: number;
  latest_stock: string;
}
interface IStockHistory {
  time: string;
  date: string;
  dateTime: Date;
  amount: number;
}

const columns = [
  { title: "ช่องที่", dataIndex: "id", key: "id" },
  { title: "ชื่อยา", dataIndex: "pill_name", key: "pill_name" },
  { title: "จำนวนยาทั้งหมด", dataIndex: "total", key: "total" },
  { title: "คงเหลือ", dataIndex: "stock", key: "stock" },
  { title: "วันที่บรรจุยา", dataIndex: "latest_stock", key: "latest_stock" },
];

function PillStock() {
  const [tableData, setTableData] = useState<any | undefined>();

  function isInArray(index: number, arr: IPillStockChannel[]) {
    let flag = 0;
    arr?.map((item) => {
      if (index === item.channel_id) flag = 1;
    });
    return flag === 0 ? false : true;
  }

  useEffect(() => {
    let arr = [];
    let pillStockArr: IPillStockChannel[] = pillStocks["pillStocks"];
    for (let i = 1; i <= 7; i++) {
      const data = pillStockArr.filter((pill) => pill.channel_id === i);
      if (data.length > 0) {
        arr.push({
          id: data[0].channel_id,
          pill_name: data[0]["pill_name"],
          total: data[0]["total"],
          stock: data[0]["stock"],
          latest_stock: data[0]["latest_stock"],
        });
      } else {
        arr.push({
          id: i,
          pill_name: "-",
          total: "-",
          stock: "-",
          latest_stock: "-",
        });
      }
    }
    setTableData(arr);
  }, []);

  // async function ApiGetPillStock() {
  //   return await axios
  //     .get("/pillStock")
  //     .then((response) => {
  //       console.log("Pill channel datas :", response.data);
  //       // setTableData(response.data["pillStocks"]);
  //       let arr = [];
  //       let pillStockArr: IPillStockChannel[] = response.data["pillStocks"];
  //       for (let i = 0; i <= 6; i++) {
  //         if (isInArray(i + 1, pillStockArr)) {
  //           arr.push({
  //             id: pillStockArr[i].channel_id,
  //             pill_name: pillStockArr[i]["pill_name"],
  //             total: pillStockArr[i]["total"],
  //             stock: pillStockArr[i]["stock"],
  //             latest_stock: pillStockArr[i]["latest_stock"],
  //           });
  //         } else {
  //           arr.push({
  //             id: i + 1,
  //             pill_name: "-",
  //             total: "-",
  //             stock: "-",
  //             latest_stock: "-",
  //           });
  //         }
  //       }
  //       setTableData(arr);

  //       return response.data;
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  //}
  console.log("this is table", tableData);

  useEffect(() => {
    // ApiGetPillStock();
    console.log("this is table", tableData);
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
          <Column title="วันที่บรรจุ" dataIndex="latest_stock" key="latest_stock" />
        </Table_PillStock>
      </Container_Table>
    </>
  );
}

export default PillStock;
