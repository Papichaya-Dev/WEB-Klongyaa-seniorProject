import { Col, Menu, message, Row } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../../../common/Sidebar";
import { Calendar_Icon, Col_Date, Row_Container_Date, Text_Topic } from "../shared/style/ForgettenRate.style";
import ChartForgettenMonth from "./ChartForgettenMonth";
import ChartForgettenWeek from "./ChartForgettenWeek";

function ForgottenRate() {
  const [selectTime, setSelectTime] = useState("รายสัปดาห์");
  useEffect(() => {
    console.log("Time", selectTime);
  }, [selectTime]);
  return (
    <>
      <Navbar />
      <Text_Topic>อัตราการลืมทานยา</Text_Topic>
      <Row_Container_Date>
        <Col span={8}>
          <Calendar_Icon />
        </Col>
        <Col_Date span={8}>ระหว่างวันที่</Col_Date>
        <Col span={8}>
          <select value={selectTime} onChange={(e) => setSelectTime(e.target.value)}>
            <option onClick={() => console.log("รายสัปดาห์")}>รายสัปดาห์</option>
            <option onClick={() => console.log("รายเดือน")}>รายเดือน</option>
          </select>
        </Col>
      </Row_Container_Date>
      {selectTime === "รายสัปดาห์" ? <ChartForgettenWeek /> : <ChartForgettenMonth />}
    </>
  );
}

export default ForgottenRate;
