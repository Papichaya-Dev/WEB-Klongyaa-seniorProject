import Navbar from "../../../common/Sidebar";
import React, { useEffect, useState } from "react";
import axios from "../../../../config/axiosInstance";
import { Button, Col, Row, Tooltip } from "antd";
import { Button_Tooltip, Main_Container, Row_Container } from "../styles/Home.style";
import { Text_Topic } from "components/page/History/views/History.style";
import { QuestionOutlined } from "@ant-design/icons";
import { useHistory, useParams } from "react-router-dom";
import pillChannelData from "../mock/pillChannelData.json";
//===================== CREATE INTERFACE =====================//
interface IPillChannelData {
  channel_id: number;
  pill_name: string;
}
const Home = () => {
  const history = useHistory();
  const paramObjectId = useParams<{ id: string }>();

  const [pillData, setPillData] = useState<IPillChannelData | undefined | any>();

  // async function ApiGetPillChannelData() {
  //   return await axios
  //     .get("/pillChannelDatas")
  //     .then((response) => {
  //       setPillData(response.data["pill_channel_datas"]);
  //       return response.data;
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // }
  console.log("Pill channel data", pillData);

  useEffect(() => {
    // ApiGetPillChannelData();
    setPillData(pillChannelData["pill_channel_datas"]);
  }, []);
  return (
    <>
      <Navbar />
      <Text_Topic>KLONGYAA CHANNEL</Text_Topic>
      <Main_Container>
        {pillData?.length < 1 ? (
          <div>
            <Row_Container>
              <Col span={12} onClick={() => history.push("/detailPillScreen")}>
                ช่องที่1
              </Col>
              <Col span={12}>ช่องที่2</Col>
            </Row_Container>
            <Row_Container>
              <Col span={12}>ช่องที่3</Col>
              <Col span={12}>ช่องที่4</Col>
            </Row_Container>
            <Row_Container>
              <Col span={8}>ช่องที่5</Col>
              <Col span={8}>ช่องที่6</Col>
              <Col span={8}>ช่องที่7</Col>
            </Row_Container>
          </div>
        ) : (
          <div>
            <Row_Container>
              <Col span={12}>ช่องที่1</Col>
              <Col span={12}>ช่องที่2</Col>
            </Row_Container>
            <Row_Container>
              <Col span={12} onClick={() => history.push(`/detailPillScreen/${pillData[0].channel_id}`)}>
                ช่องที่3
              </Col>
              <Col span={12}>ช่องที่4</Col>
            </Row_Container>
            <Row_Container>
              <Col span={8}>ช่องที่5</Col>
              <Col span={8}>ช่องที่6</Col>
              <Col span={8}>ช่องที่7</Col>
            </Row_Container>
          </div>
        )}
      </Main_Container>
      <Tooltip placement="leftBottom" title="จอแสดงผลกล่องยาของผู้ใช้งาน กดเพื่อเข้าไปดูรายละเอียดต่างๆ">
        <Button_Tooltip shape="circle" icon={<QuestionOutlined />} />
      </Tooltip>
    </>
  );
};

export default Home;
