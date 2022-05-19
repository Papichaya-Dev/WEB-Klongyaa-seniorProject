import { Col } from "antd";
import React, { useEffect, useState } from "react";
import Navbar from "../../../common/sidebar/Sidebar";
import { Calendar_Icon, Col_Date, Row_Container_Date, Selete_Filter, Text_Topic } from "../shared/style/ForgettenRate.style";
import ChartForgettenMonth from "./ChartForgettenMonth";
import ChartForgettenWeek from "./ChartForgettenWeek";
import { Select } from "antd";

const { Option } = Select;

function ForgottenRate() {
  const [selectTime, setSelectTime] = useState("รายสัปดาห์");

  useEffect(() => {
    console.log("Time", selectTime);
  }, [selectTime]);

  function handleChange(value: any) {
    console.log(`selected ${value}`);
    setSelectTime(`${value}`);
  }
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
