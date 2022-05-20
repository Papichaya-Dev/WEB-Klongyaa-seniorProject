import Navbar from "../../../common/sidebar/Sidebar";
import React, { useEffect, useState } from "react";
import axios from "../../../../config/axiosInstance";
import { Col, Space, Spin, Tooltip } from "antd";
import { Box_Pill_Channel, Button_Tooltip, Main_Container, Pill_Channel_No, Pill_Name, Row_Container } from "../styles/Home.style";
import { Text_Topic } from "components/page/History/styles/History.style";
import { QuestionOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import { CheckExpiredToken } from "common/checkExpiredToken";

//===================== CREATE INTERFACE =====================//
interface IPillChannelData {
  channel_id: string;
  pill_name: string;
}
function Home() {
  const history = useHistory();
  const [pillData, setPillData] = useState<IPillChannelData | undefined | any>([]);

  async function ApiGetPillChannelData() {
    const accessToken: string = await CheckExpiredToken();
    return await axios.get("/pill-data/getHomeChannelData", { headers: { Authorization: `Bearer ${accessToken}` } }).then((response) => {
      console.log("PILL CHANNEL SCREEN", response.data["pill_channel_datas"]);
      let arr: IPillChannelData[] = [];
      let pillChannelData: IPillChannelData[] = response.data["pill_channel_datas"];
      for (let i = 1; i <= 7; i++) {
        const data = pillChannelData.filter((pill) => pill.channel_id === i.toString());
        if (data.length > 0) {
          arr.push({
            channel_id: data[0].channel_id,
            pill_name: data[0].pill_name,
          });
        } else {
          arr.push({
            channel_id: "-1",
            pill_name: "-1",
          });
        }
      }
      setPillData(arr);
    });
  }

  useEffect(() => {
    ApiGetPillChannelData();
  }, []);

  const checkHaveData = (index: number, spanNum: number) => {
    if (pillData[index].pill_name !== "-1") {
      return (
        <Box_Pill_Channel span={spanNum} onClick={() => history.push(`/detailPillScreen/${index + 1}`)}>
          <Pill_Channel_No>ช่องที่{index + 1}</Pill_Channel_No>
          <Pill_Name>{pillData[index].pill_name}</Pill_Name>
        </Box_Pill_Channel>
      );
    } else {
      return (
        <Col span={spanNum}>
          <div></div>
          <div>{}</div>
        </Col>
      );
    }
  };

  const channelDataLayout = () => {
    return (
      <div>
        <Row_Container>
          {checkHaveData(0, 12)}
          {checkHaveData(1, 12)}
        </Row_Container>

        <Row_Container>
          {checkHaveData(2, 12)}

          {checkHaveData(3, 12)}
        </Row_Container>

        <Row_Container>
          {checkHaveData(4, 8)}

          {checkHaveData(5, 8)}

          {checkHaveData(6, 8)}
        </Row_Container>
      </div>
    );
  };

  return (
    <>
      <Navbar />
      <Text_Topic>KLONGYAA CHANNEL</Text_Topic>
      <Main_Container>
        {pillData.length === 0 ? (
          <Space size="middle" style={{ marginLeft: "400px" }}>
            <Spin size="large" />
          </Space>
        ) : (
          channelDataLayout()
        )}
      </Main_Container>
      <Tooltip placement="leftBottom" title="จอแสดงผลกล่องยาของผู้ใช้งาน กดเพื่อเข้าไปดูรายละเอียดต่างๆ">
        <Button_Tooltip shape="circle" icon={<QuestionOutlined />} />
      </Tooltip>
    </>
  );
}

export default Home;
