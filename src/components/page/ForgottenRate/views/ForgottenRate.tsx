import { Col } from "antd";
import React, { useEffect, useState } from "react";
import Navbar from "../../../common/sidebar/Sidebar";
import { CalendarIcon, ColDate, RowContainerDate, SeleteFilter, TextTopic } from "../shared/style/ForgettenRate.style";
import ChartForgettenMonth from "./ChartForgettenMonth";
import ChartForgettenWeek from "./ChartForgettenWeek";
import { Select } from "antd";
import { CheckExpiredToken } from "common/checkExpiredToken";
import axios from "../../../../config/axiosInstance";
import { dateFormat, dateFormatNotYear } from "utils/DateFormat";

const { Option } = Select;

function ForgottenRate() {
  const [selectTime, setSelectTime] = useState("รายสัปดาห์");
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");

  function handleChange(value: any) {
    setSelectTime(`${value}`);
  }

  async function ApiGetDateForgettenRate() {
    const accessToken: string = await CheckExpiredToken();
    if (selectTime === "รายเดือน") {
      return await axios
        .get("/pill-data/forgottenRate/month", { headers: { Authorization: `Bearer ${accessToken}` } })
        .then((response) => {
          setStartDate(dateFormatNotYear(response.data["start_date"]));
          setEndDate(dateFormat(response.data["end_date"]));
          return response.data;
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      return await axios
        .get("/pill-data/forgottenRate/week", { headers: { Authorization: `Bearer ${accessToken}` } })
        .then((response) => {
          setStartDate(dateFormatNotYear(response.data["start_date"]));
          setEndDate(dateFormat(response.data["end_date"]));
          return response.data;
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }

  useEffect(() => {
    ApiGetDateForgettenRate();
  }, [selectTime]);

  return (
    <>
      <Navbar />
      <TextTopic>อัตราการลืมทานยา</TextTopic>
      <RowContainerDate>
        <Col span={8}>
          <CalendarIcon />
        </Col>

        {selectTime === "รายสัปดาห์" ? <ColDate span={8}>{startDate + " - " + endDate}</ColDate> : <ColDate span={8}>{startDate + " - " + endDate}</ColDate>}
        <Col span={8}>
          <SeleteFilter defaultValue={selectTime} onChange={handleChange}>
            <Option value="รายสัปดาห์">รายสัปดาห์</Option>
            <Option value="รายเดือน">รายเดือน</Option>
          </SeleteFilter>
        </Col>
      </RowContainerDate>
      {selectTime === "รายสัปดาห์" ? <ChartForgettenWeek /> : <ChartForgettenMonth />}
    </>
  );
}

export default ForgottenRate;
