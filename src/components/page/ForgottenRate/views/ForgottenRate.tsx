import { Col } from "antd";
import React, { useEffect, useState } from "react";
import Navbar from "../../../common/sidebar/Sidebar";
import { Calendar_Icon, Col_Date, Row_Container_Date, Selete_Filter, Text_Topic } from "../shared/style/ForgettenRate.style";
import ChartForgettenMonth from "./ChartForgettenMonth";
import ChartForgettenWeek from "./ChartForgettenWeek";
import { Select } from "antd";
import { CheckExpiredToken } from "common/checkExpiredToken";
import axios from "../../../../config/axiosInstance";
import { dateFormat, dateFormatNotYear } from "utils/DateFormat";

const { Option } = Select;

function ForgottenRate() {
  const [selectTime, setSelectTime] = useState("รายสัปดาห์");
  const [startDate, setStartDate] = useState<any | undefined>("");
  const [endDate, setEndDate] = useState<any | undefined>("");

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
      <Text_Topic>อัตราการลืมทานยา</Text_Topic>
      <Row_Container_Date>
        <Col span={8}>
          <Calendar_Icon />
        </Col>

        {selectTime === "รายสัปดาห์" ? <Col_Date span={8}>{startDate + " - " + endDate}</Col_Date> : <Col_Date span={8}>{startDate + " - " + endDate}</Col_Date>}
        <Col span={8}>
          <Selete_Filter defaultValue={selectTime} onChange={handleChange}>
            <Option value="รายสัปดาห์">รายสัปดาห์</Option>
            <Option value="รายเดือน">รายเดือน</Option>
          </Selete_Filter>
        </Col>
      </Row_Container_Date>
      {selectTime === "รายสัปดาห์" ? <ChartForgettenWeek /> : <ChartForgettenMonth />}
    </>
  );
}

export default ForgottenRate;
