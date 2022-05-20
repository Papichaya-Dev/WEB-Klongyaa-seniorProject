import Navbar from "../../../common/sidebar/Sidebar";
import React, { useEffect, useState } from "react";
import {
  Back_Button,
  Box_Main_Pill_Name,
  Button_Dont_Eat,
  Button_Save,
  Container_Main_Pill_Name,
  Input_Main_Pill_Name,
  Input_Pill_Name,
  Line_Horizontal,
  NotificationCreatedPostSuccess,
  Prohibition_Box,
  Span_Field,
  Span_Field_Properties,
  Span_Main_Pill_Name,
  Text_Check_Input,
  Text_Pill_Name,
  Text_Task,
  Text_Topic,
  Text_Topic_Feature,
  Text_Topic_Properties,
} from "../styles/DetailPillScreen.style";
import mockDetailPill from "../mock/detailPillScreen.json";
import { Tooltip } from "antd";
import { QuestionOutlined } from "@ant-design/icons";
import mockPropotiesPill from "../mock/propotiesPill.json";
import { useHistory, useParams } from "react-router-dom";
import { CheckExpiredToken } from "common/checkExpiredToken";
import axios from "../../../../config/axiosInstance";

interface IDetailPill {
  channel_id: string;
  pill_name: string;
  total: number;
  pill_amount: number;
  take_times: string[];
  pillsPerTime: string;
}

function DetailPillScreen() {
  const [detailPill, setDetailPill] = useState<IDetailPill | any>();
  const [inputMainPillName, setInputMainPillName] = useState("");
  const [dropdownSearch, setDropdownSearch] = useState([]);

  const [isShowNotification, setIsShowNotification] = useState(false);
  const paramObjectId = useParams<{ id: string }>();
  const history = useHistory();

  function onChange(event: any) {
    setInputMainPillName(event.target.value);
  }
  console.log("INPUT MAIN PILL NAME", inputMainPillName);

  function OnSubmitMainPillName() {
    console.log("SUBMIT");
    setIsShowNotification(true);
    setTimeout(() => {
      setIsShowNotification(false);
    }, 600);
  }

  async function ApiGetPillDetail() {
    const accessToken: string = await CheckExpiredToken();
    return await axios.get("/pill-data/getPillChannelDetail/" + paramObjectId.id, { headers: { Authorization: `Bearer ${accessToken}` } }).then((response) => {
      console.log("DETAIL PILL", response.data);
      setDetailPill(response.data);
    });
  }

  useEffect(() => {
    ApiGetPillDetail();
    console.log("DETAIL PILL", detailPill);
  }, []);
  return (
    <>
      <Navbar />
      <Back_Button onClick={() => history.push("/home")} />
      {isShowNotification ? (
        <NotificationCreatedPostSuccess message="บันทึกข้อมูลสำเร็จ" type="success" showIcon />
      ) : (
        <>
          <Text_Topic>
            ข้อมูลของยาช่องที่ <span style={{ color: "yellow" }}>{paramObjectId.id}</span>
          </Text_Topic>
          <Text_Pill_Name>
            ชื่อยา
            <Span_Field>
              <Input_Pill_Name placeholder={detailPill?.pill_name} disabled={true} />
            </Span_Field>
          </Text_Pill_Name>
          <Text_Task>
            จำนวนยาท้ังหมด
            <Span_Field>
              <Input_Pill_Name placeholder={detailPill?.total + "   เม็ด"} disabled={true} />
            </Span_Field>
          </Text_Task>
          <Text_Task>
            จำนวนยาที่ต้องทาน
            <Span_Field>
              <Input_Pill_Name placeholder={detailPill?.pillsPerTime + "   เม็ด"} disabled={true} />
            </Span_Field>
          </Text_Task>
          {detailPill?.take_times?.map((item: string, index: number) => {
            return (
              <Text_Task key={index}>
                เวลาทานยา <span>เวลาที่ {index + 1}</span>
                <Span_Field>
                  <Input_Pill_Name placeholder={item + "   น."} disabled={true} />
                </Span_Field>
              </Text_Task>
            );
          })}
          <Line_Horizontal />
          {/* {inputMainPillName === "" ? (
            <Text_Check_Input>
              คุณยังไม่ได้กรอกข้อมูลเพิ่มเติม <span style={{ fontWeight: "350" }}>กรอกข้อมูลเพื่อที่ระบบจะประมวลผลคุณสมบัติของยา</span>
            </Text_Check_Input>
          ) : (
            <div style={{ marginBottom: "25px" }}>fggf</div>
          )} */}
          <Text_Check_Input>
            คุณยังไม่ได้กรอกข้อมูลเพิ่มเติม <span style={{ fontWeight: "350" }}>กรอกข้อมูลเพื่อที่ระบบจะประมวลผลคุณสมบัติของยา</span>
          </Text_Check_Input>
          <Container_Main_Pill_Name>
            <Box_Main_Pill_Name>
              <Span_Main_Pill_Name>
                *ชื่อยาสามัญ
                <Input_Main_Pill_Name type="text" onChange={onChange} value={inputMainPillName} />
              </Span_Main_Pill_Name>
            </Box_Main_Pill_Name>
            {inputMainPillName !== "" ? (
              <Button_Save onClick={OnSubmitMainPillName} style={{ backgroundColor: "#6ADB89", color: "white" }}>
                บันทึก
              </Button_Save>
            ) : (
              <Button_Save disabled={true}>บันทึก</Button_Save>
            )}
          </Container_Main_Pill_Name>{" "}
          <Text_Topic_Feature>คุณสมบัติของยา{mockPropotiesPill.pill_name}</Text_Topic_Feature>
          <Text_Topic_Properties>
            สรรพคุณ
            <Span_Field_Properties>{mockPropotiesPill.side_effect}</Span_Field_Properties>
          </Text_Topic_Properties>
          <Text_Topic_Properties>
            ผลข้างเคียง
            <Span_Field_Properties>{mockPropotiesPill.prohibition}</Span_Field_Properties>
          </Text_Topic_Properties>
          <Text_Topic_Properties>
            ห้ามกินคู่กับยาอะไร
            <Tooltip placement="right" title={mockPropotiesPill.prohibition_info} overlayStyle={{ width: "300px" }}>
              <Button_Dont_Eat shape="circle" icon={<QuestionOutlined />} />
            </Tooltip>
            {mockPropotiesPill?.prohibition?.map((item, index) => {
              return <Prohibition_Box key={index}>{item}</Prohibition_Box>;
            })}
          </Text_Topic_Properties>
        </>
      )}
    </>
  );
}

export default DetailPillScreen;
