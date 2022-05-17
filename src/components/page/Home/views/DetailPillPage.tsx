import Navbar from "components/common/Sidebar";
import React, { useEffect, useState } from "react";
import {
  Box_Main_Pill_Name,
  Button_Save,
  Container_Main_Pill_Name,
  Input_Main_Pill_Name,
  Input_Pill_Name,
  Line_Horizontal,
  NotificationCreatedPostSuccess,
  Span_Field,
  Span_Main_Pill_Name,
  Text_Check_Input,
  Text_Pill_Name,
  Text_Task,
  Text_Topic,
} from "../styles/DetailPillScreen.style";
import mockDetailPill from "../mock/detailPillScreen.json";

interface IDetailPill {
  pill_name: string;
  total_pill: number;
  pill_amount: number;
  times: string[];
}

function DetailPillScreen() {
  const [detailPill, setDetailPill] = useState<IDetailPill | undefined | any>();
  const [inputMainPillName, setInputMainPillName] = useState("");
  const [isShowNotification, setIsShowNotification] = useState(false);

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

  useEffect(() => {
    setDetailPill(mockDetailPill);
    console.log("DETAIL PILL", detailPill);
  }, []);
  return (
    <>
      <Navbar />
      {isShowNotification ? (
        <NotificationCreatedPostSuccess message="สร้างกระทู้สำเร็จเเล้ว" type="success" showIcon />
      ) : (
        <>
          <Text_Topic>
            ข้อมูลของยาช่องที่ <span style={{ color: "yellow" }}>3</span>
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
              <Input_Pill_Name placeholder={detailPill?.total_pill + "   เม็ด"} disabled={true} />
            </Span_Field>
          </Text_Task>
          <Text_Task>
            จำนวนยาที่ต้องทาน
            <Span_Field>
              <Input_Pill_Name placeholder={detailPill?.pill_amount + "   เม็ด"} disabled={true} />
            </Span_Field>
          </Text_Task>
          {detailPill?.times?.map((item: string, index: number) => {
            return (
              <Text_Task>
                เวลาทานยา <span>เวลาที่ {index + 1}</span>
                <Span_Field>
                  <Input_Pill_Name placeholder={item + "   น."} disabled={true} />
                </Span_Field>
              </Text_Task>
            );
          })}
          <Line_Horizontal />
          {/* {inputMainPillName === "" ? <Text_Check_Input>
        คุณยังไม่ได้กรอกข้อมูลเพิ่มเติม <span style={{ fontWeight: "350" }}>กรอกข้อมูลเพื่อที่ระบบจะประมวลผลคุณสมบัติของยา</span>
      </Text_Check_Input> : ""} */}
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
              <Button_Save>บันทึก</Button_Save>
            )}
          </Container_Main_Pill_Name>{" "}
        </>
      )}
    </>
  );
}

export default DetailPillScreen;
