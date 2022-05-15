import axios from "../../../../config/axiosInstance";
import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { Chart_ForgettenRate_Week, Container } from "../shared/style/ForgettenRate.style";
import { Menu, message } from "antd";

function ChartForgettenWeek() {
  const LABEL_WEEK = ["จันทร์", "อีงคาร", "พุธ", "พฤหัสบดี", "ศุกร์", "เสาร์", "อาทิตย์"];
  const [dataWeek, setDataWeek] = useState([]);

  async function ApiGetForgettenRateWeek() {
    return await axios
      .get("/forgottenRate?filter=week")
      .then((response) => {
        setDataWeek(response.data["rates"]);
        return response.data;
      })
      .catch((err) => {
        console.error(err);
      });
  }
  useEffect(() => {
    ApiGetForgettenRateWeek();
    console.log("Forgetten Rate Week :", dataWeek);
  }, []);
  return (
    <Container>
      <ReactApexChart
        height={500}
        width={1000}
        options={{
          chart: {
            type: "line",
            dropShadow: {
              enabled: true,
              blur: 1,
              left: 1,
              top: 1,
            },
          },
          colors: ["#7b1b77"],
          stroke: {
            width: 3,
            curve: "smooth",
          },
          fill: {
            opacity: 0.1,
          },
          markers: {
            size: 5,
            hover: {
              size: 10,
            },
          },
          dataLabels: {
            enabled: true,
          },
          xaxis: {
            categories: LABEL_WEEK,
            title: {
              text: "ระยะเวลา",
            },
          },
          yaxis: {
            title: {
              text: "จำนวนที่ลืมทานยา (ครั้ง)",
            },
            min: 0,
            max: 10,
          },
          grid: {
            borderColor: "#e7e7e7",
            row: {
              colors: ["#f3f3f3", "transparent"],
              opacity: 0.5,
            },
          },
        }}
        series={[
          {
            name: "จำนวน (ครั้ง)",
            data: dataWeek,
          },
        ]}
        type="line"
      />
    </Container>
  );
}

export default ChartForgettenWeek;
