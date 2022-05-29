import axios from "../../../../config/axiosInstance";
import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { Container } from "../shared/style/ForgettenRate.style";
import { CheckExpiredToken } from "common/checkExpiredToken";

function ChartForgettenWeek() {
  const LABEL_WEEK = ["อาทิตย์", "จันทร์", "อังคาร", "พุธ", "พฤหัสบดี", "ศุกร์", "เสาร์"];
  const [dataWeek, setDataWeek] = useState<[]>([]);
  const [rateMax, setRateMax] = useState<number>();
  const [labelWeek, setLabelWeek] = useState<string[]>([]);

  async function ApiGetForgettenRateWeek() {
    const accessToken: string = await CheckExpiredToken();
    return await axios
      .get("/pill-data/forgottenRate/week", { headers: { Authorization: `Bearer ${accessToken}` } })
      .then((response) => {
        let startDateStr: string = response.data["start_date"];
        let dayNum = new Date(startDateStr).getDay();
        let buffLabelWeek: string[] = [];
        for (let i = 0; i < 7; i++) {
          if (dayNum > 6) dayNum = 0;
          buffLabelWeek.push(LABEL_WEEK[dayNum]);
          dayNum++;
        }
        setLabelWeek(buffLabelWeek);

        setDataWeek(response.data["rates"]);
        let rateMax = Math.max(response.data["rates"] + 2);
        setRateMax(rateMax);
        return response.data;
      })
      .catch((err) => {
        console.error(err);
      });
  }

  useEffect(() => {
    ApiGetForgettenRateWeek();
  }, []);
  return (
    <Container>
      <ReactApexChart
        height={500}
        width={1000}
        options={{
          chart: {
            type: "area",
            dropShadow: {
              enabled: true,
              blur: 1,
              left: 1,
              top: 1,
            },
          },
          colors: ["#d11111"],
          stroke: {
            width: 3,
            curve: "smooth",
          },
          fill: {
            opacity: 0.2,
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
            categories: labelWeek,
            title: {
              text: "ระยะเวลา",
            },
          },
          yaxis: {
            title: {
              text: "จำนวนที่ลืมทานยา (ครั้ง)",
            },
            min: 0,
            max: rateMax,
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
        type="area"
      />
    </Container>
  );
}

export default ChartForgettenWeek;
