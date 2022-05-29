import Navbar from "../../../common/sidebar/Sidebar";
import React, { useEffect, useState } from "react";
import {
  BackButton,
  BoxMainPillName,
  ButtonDontEat,
  ButtonSave,
  ContainerMainPillName,
  InputMainPillName,
  InputPillName,
  LineHorizontal,
  NotificationCreatedPostSuccess,
  ProhibitionBox,
  SpanFieldEffect,
  SpanField,
  SpanFieldProperties,
  SpanMainPillName,
  TextCheckInput,
  TextPillName,
  TextTask,
  TextTopic,
  TextTopicFeature,
  TextTopicProperties,
} from "../styles/DetailPillScreen.style";
import { Space, Spin, Tooltip } from "antd";
import { QuestionOutlined } from "@ant-design/icons";
import { useHistory, useParams } from "react-router-dom";
import { CheckExpiredToken } from "common/checkExpiredToken";
import axios from "../../../../config/axiosInstance";
import { MainContainer } from "../styles/Home.style";
import { IDetailPill, IRealPill } from "../types/detailPill.types";

function DetailPillScreen() {
  const [detailPill, setDetailPill] = useState<IDetailPill>();
  const [dangerPillInfo, setDangerPillInfo] = useState<string>("");
  const [selectRealPllName, setSelectRealPillName] = useState<{
    value: string;
    rid: string;
  }>();

  const [inputRealPillName, setInputRealPillName] = useState<string>("");

  const [isShowNotification, setIsShowNotification] = useState(false);
  const paramObjectId = useParams<{ id: string }>();
  const history = useHistory();

  const [options, setOptions] = useState<{ value: string; rid: string }[]>([]);

  const onSearch = (searchText: string) => {
    if (searchText.trim() === "") setOptions([]);
    if (selectRealPllName?.value !== searchText) setSelectRealPillName(undefined);
    ApiGetRealPillByKeyword(searchText);
  };

  const onSelect = (data: string) => {
    const selectData = options.find((pill) => pill.value === data);
    if (selectData) setSelectRealPillName(selectData);
  };

  // console.log("INPUT MAIN PILL NAME", inputMainPillName);

  async function OnSubmitMainPillName() {
    const isSuccessSubmit = await ApiAddRealPillToPillChannelData();
    if (isSuccessSubmit) {
      setIsShowNotification(true);
      setTimeout(() => {
        setIsShowNotification(false);
      }, 300);
    }
  }

  async function ApiGetPillDetail() {
    const accessToken: string = await CheckExpiredToken();
    return await axios
      .get("/pill-data/getPillChannelDetail/" + paramObjectId.id, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((response) => {
        setDetailPill(response.data);
        if (response.data?.real_pill_data !== null) {
          setInputRealPillName(response.data?.real_pill_data.pill_name);
        }
        if (response.data?.real_pill_data !== null && response.data?.real_pill_data?.danger_pills.length > 0) {
          let infoText: string = "";
          response.data?.real_pill_data?.danger_pills?.map((item: any) => {
            infoText = infoText + item.pill_name + ": " + item.reason + "\n";
          });
          setDangerPillInfo(infoText);
        }
      });
  }

  async function ApiGetRealPillByKeyword(keyword: string) {
    if (keyword.trim() === "") return;

    const accessToken: string = await CheckExpiredToken();

    await axios
      .get("/pill-data/getRealPillNameByKeyword/" + keyword, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((response) => {
        const realPillDataRes: any[] = response.data["real_pill_datas"];

        const setRealPills: IRealPill[] = realPillDataRes.map((pill) => {
          return Object.assign(pill);
        });

        setOptions(
          setRealPills.length === 0
            ? []
            : setRealPills.map((pill) => {
                return {
                  value: pill.pill_name,
                  rid: pill.rid,
                };
              }),
        );
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  async function ApiAddRealPillToPillChannelData(): Promise<boolean> {
    if (detailPill && selectRealPllName) {
      const accessToken: string = await CheckExpiredToken();

      let returnBool: boolean = await axios
        .post(
          "/pill-data/addRealNameToPillChannelData",
          {
            cid: detailPill.cid,
            rid: selectRealPllName.rid,
          },
          {
            headers: { Authorization: `Bearer ${accessToken}` },
          },
        )
        .then((response) => {
          setSelectRealPillName(undefined);
          setDetailPill(response.data);
          setOptions([]);
          if (response.data?.real_pill_data !== null && response.data?.real_pill_data?.danger_pills.length > 0) {
            let infoText: string = "";
            response.data?.real_pill_data?.danger_pills?.map((item: any) => {
              infoText = infoText + item.pill_name + ": " + item.reason + "\n";
            });
            setDangerPillInfo(infoText);
          }
          return true;
        })
        .catch((error) => {
          return false;
        });

      return returnBool;
    } else {
      return false;
    }
  }

  async function ApiDeleteeRealNameInPillChannelData() {
    const accessToken: string = await CheckExpiredToken();
    axios
      .post(
        "/pill-data/deleteRealNameInPillChannelData",
        {
          cid: detailPill?.cid,
          rid: detailPill?.real_pill_data?.rid,
        },
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        },
      )
      .then((res) => {
        setSelectRealPillName(undefined);
        let buff = detailPill;
        if (buff) buff.real_pill_data = null;
        setDetailPill(buff);
        setInputRealPillName("");
        setOptions([]);
        setDangerPillInfo("");
        return true;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    ApiGetPillDetail();
  }, []);
  return (
    <>
      <Navbar />
      <BackButton onClick={() => history.push("/home")} />
      {isShowNotification ? (
        <NotificationCreatedPostSuccess message="บันทึกข้อมูลสำเร็จ" type="success" showIcon />
      ) : detailPill ? (
        <>
          <TextTopic>
            ข้อมูลของยาช่องที่ <span style={{ color: "yellow" }}>{paramObjectId.id}</span>
          </TextTopic>
          <TextPillName>
            ชื่อยา
            <SpanField>
              <InputPillName placeholder={detailPill?.pill_name} disabled={true} />
            </SpanField>
          </TextPillName>
          <TextTask>
            จำนวนยาท้ังหมด
            <SpanField>
              <InputPillName placeholder={detailPill?.total + "   เม็ด"} disabled={true} />
            </SpanField>
          </TextTask>
          <TextTask>
            จำนวนยาที่ต้องทาน
            <SpanField>
              <InputPillName placeholder={detailPill?.pillsPerTime + "   เม็ด"} disabled={true} />
            </SpanField>
          </TextTask>
          {detailPill?.take_times?.map((item: string, index: number) => {
            return (
              <TextTask key={index}>
                เวลาทานยา <span>เวลาที่ {index + 1}</span>
                <SpanField>
                  <InputPillName placeholder={item + "   น."} disabled={true} />
                </SpanField>
              </TextTask>
            );
          })}
          <LineHorizontal />
          {!detailPill?.real_pill_data && (
            <TextCheckInput>
              คุณยังไม่ได้กรอกข้อมูลเพิ่มเติม <span style={{ fontWeight: "350" }}>กรอกข้อมูลเพื่อที่ระบบจะประมวลผลคุณสมบัติของยา</span>
            </TextCheckInput>
          )}
          <ContainerMainPillName>
            <BoxMainPillName>
              <SpanMainPillName>
                *ชื่อยาสามัญ
                {/* <Input_Main_Pill_Name type="text" onChange={onChange} value={inputMainPillName} /> */}
                <InputMainPillName
                  disabled={!detailPill?.real_pill_data ? false : true}
                  options={options}
                  style={{ width: 200 }}
                  onSelect={onSelect}
                  onSearch={onSearch}
                  value={inputRealPillName}
                  onChange={setInputRealPillName}
                  placeholder="กรอกชื่อยา"
                />
              </SpanMainPillName>
            </BoxMainPillName>
            {detailPill?.real_pill_data ? (
              <ButtonSave onClick={ApiDeleteeRealNameInPillChannelData} style={{ backgroundColor: "#F25F5F", color: "white", border: "none" }}>
                ลบ
              </ButtonSave>
            ) : selectRealPllName ? (
              <ButtonSave onClick={OnSubmitMainPillName} style={{ backgroundColor: "#6ADB89", color: "white", border: "none" }}>
                บันทึก
              </ButtonSave>
            ) : (
              <ButtonSave disabled={true}>บันทึก</ButtonSave>
            )}
          </ContainerMainPillName>{" "}
          {detailPill?.real_pill_data && (
            <>
              <TextTopicFeature>คุณสมบัติของยา{detailPill?.real_pill_data.pill_name}</TextTopicFeature>
              <TextTopicProperties>
                สรรพคุณ
                <SpanFieldProperties>{detailPill?.real_pill_data.property}</SpanFieldProperties>
              </TextTopicProperties>
              <TextTopicProperties>
                ผลข้างเคียง
                <SpanFieldEffect>{detailPill?.real_pill_data.effect}</SpanFieldEffect>
              </TextTopicProperties>
              <TextTopicProperties>
                ห้ามกินคู่กับยาอะไร
                <Tooltip placement="right" title={dangerPillInfo} overlayStyle={{ width: "300px" }}>
                  <ButtonDontEat shape="circle" icon={<QuestionOutlined />} />
                </Tooltip>
                {detailPill?.real_pill_data?.danger_pills?.map((item, index) => {
                  return <ProhibitionBox key={index}>{item.pill_name}</ProhibitionBox>;
                })}
              </TextTopicProperties>
            </>
          )}
        </>
      ) : (
        <MainContainer>
          <Space size="middle" style={{ marginLeft: "400px" }}>
            <Spin size="large" />
          </Space>
        </MainContainer>
      )}
    </>
  );
}

export default DetailPillScreen;
