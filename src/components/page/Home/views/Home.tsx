import Navbar from "../../../common/sidebar/Sidebar";
import { useEffect, useState } from "react";
import axios from "../../../../config/axiosInstance";
import { Col, Space, Spin, Tooltip } from "antd";
import { BoxPillChannel, ButtonTooltip, MainContainer, PillChannelNo, PillName, RowContainer } from "../styles/Home.style";
import { TextTopic } from "components/page/History/styles/History.style";
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
  const [pillData, setPillData] = useState<IPillChannelData[]>([]);

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
        <BoxPillChannel span={spanNum} onClick={() => history.push(`/detailPillScreen/${index + 1}`)}>
          <PillChannelNo>ช่องที่{index + 1}</PillChannelNo>
          <PillName>{pillData[index].pill_name}</PillName>
        </BoxPillChannel>
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
        <RowContainer>
          {checkHaveData(0, 12)}
          {checkHaveData(1, 12)}
        </RowContainer>

        <RowContainer>
          {checkHaveData(2, 12)}

          {checkHaveData(3, 12)}
        </RowContainer>

        <RowContainer>
          {checkHaveData(4, 8)}

          {checkHaveData(5, 8)}

          {checkHaveData(6, 8)}
        </RowContainer>
      </div>
    );
  };

  return (
    <>
      <Navbar />
      <TextTopic>KLONGYAA CHANNEL</TextTopic>
      <MainContainer>
        {pillData.length === 0 ? (
          <Space size="middle" style={{ marginLeft: "400px" }}>
            <Spin size="large" />
          </Space>
        ) : (
          channelDataLayout()
        )}
      </MainContainer>
      <Tooltip placement="leftBottom" title="จอแสดงผลกล่องยาของผู้ใช้งาน กดเพื่อเข้าไปดูรายละเอียดต่างๆ">
        <ButtonTooltip shape="circle" icon={<QuestionOutlined />} />
      </Tooltip>
    </>
  );
}

export default Home;
