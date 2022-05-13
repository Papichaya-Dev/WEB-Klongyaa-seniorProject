import React, { useEffect, useState } from "react";
import Navbar from "../../../common/Sidebar";
import { Text_Topic } from "../styles/PillStock.style";
import { DataGrid } from "@mui/x-data-grid";
import axios from "../../../../config/axiosInstance";

interface IPillStockChannel {
  channel_id: number;
  pill_name: string;
  total: number;
  stock: number;
  latest_stock?: string;
  stock_history?: IStockHistory[];
}
interface IStockHistory {
  time: string;
  date: string;
  dateTime: Date;
  amount: number;
}

const columns = [
  { field: "id", headerName: "ช่องที่" },
  { field: "pill_name", headerName: "ชื่อยา", width: 200 },
  { field: "total", headerName: "จำนวนยาทั้งหมด", width: 200 },
  { field: "stock", headerName: "คงเหลือ", width: 200 },
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

  async function ApiGetPillStock() {
    return await axios
      .get("/pillStock")
      .then((response) => {
        console.log("Pill channel datas :", response.data);
        // setTableData(response.data["pillStocks"]);
        let arr = [];
        let pillStockArr: IPillStockChannel[] = response.data["pillStocks"];
        for (let i = 0; i <= 6; i++) {
          if (isInArray(i + 1, pillStockArr)) {
            arr.push({
              id: pillStockArr[i].channel_id,
              pill_name: pillStockArr[i]["pill_name"],
              total: pillStockArr[i]["total"],
              stock: pillStockArr[i]["stock"],
            });
          } else {
            arr.push({
              id: i + 1,
              pill_name: "-",
              total: "-",
              stock: "-",
            });
          }
        }
        console.log("array", arr);
        setTableData(arr);

        return response.data;
      })
      .catch((err) => {
        console.error(err);
      });
  }

  useEffect(() => {
    ApiGetPillStock();
    console.log("this is table", tableData);
  }, []);
  return (
    <>
      <Navbar />
      <Text_Topic>จำนวนยาคงเหลือ</Text_Topic>
      <div style={{ height: 700, width: "100%" }}>
        <DataGrid rows={tableData} columns={columns} pageSize={12} />
      </div>
    </>
  );
}

export default PillStock;
