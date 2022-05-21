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
import { AutoComplete, Tooltip } from "antd";
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
  cid: string;
  real_pill_data: IRealPill | null;
}

interface IRealPill {
  rid: string;
  pill_name: string;
  property: string;
  effect: string;
  danger_pills: IDangerPill[];
}

interface IDangerPill {
  pill_name: string;
  reason: string;
}
function DetailPillScreen() {
  const [detailPill, setDetailPill] = useState<IDetailPill>();
  const [dangerPillInfo, setDangerPillInfo] = useState<string>('')
  const [selectRealPllName, setSelectRealPillName] = useState<{
    value: string;
    rid: string;
  }>();

  const [inputRealPillName, setInputRealPillName] = useState<string>('')

  const [isShowNotification, setIsShowNotification] = useState(false);
  const paramObjectId = useParams<{ id: string }>();
  const history = useHistory();

  const [options, setOptions] = useState<{ value: string; rid: string }[]>([]);

  const onSearch = (searchText: string) => {
    if (searchText.trim() === "") setOptions([]);
    if (selectRealPllName?.value !== searchText)
      setSelectRealPillName(undefined);
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
      }, 2000);
    }
  }

  async function ApiGetPillDetail() {
    const accessToken: string = await CheckExpiredToken();
    return await axios
      .get("/pill-data/getPillChannelDetail/" + paramObjectId.id, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((response) => {
        console.log("DETAIL PILL", response.data);
        setDetailPill(response.data);
        if(response.data?.real_pill_data !== null) {
          setInputRealPillName(response.data?.real_pill_data.pill_name)
        }
        if(response.data?.real_pill_data !== null && response.data?.real_pill_data?.danger_pills.length > 0) {
          let infoText:string = ''
          response.data?.real_pill_data?.danger_pills?.map((item:any) => {
            infoText = infoText + item.pill_name + ': ' + item.reason + '\n'
          })
          setDangerPillInfo(infoText)
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
              })
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
          }
        )
        .then((response) => {
          setSelectRealPillName(undefined)
          setDetailPill(response.data)
          setOptions([])
          if(response.data?.real_pill_data !== null && response.data?.real_pill_data?.danger_pills.length > 0) {
            let infoText:string = ''
            response.data?.real_pill_data?.danger_pills?.map((item:any) => {
              infoText = infoText + item.pill_name + ': ' + item.reason + '\n'
            })
            setDangerPillInfo(infoText)
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
          }
        )
        .then((res) => {
          setSelectRealPillName(undefined)
          let buff = detailPill
          if(buff) buff.real_pill_data = null
          setDetailPill(buff)
          setInputRealPillName('')
          setOptions([])
          setDangerPillInfo('')
          return true;
        })
        .catch((error) => {
          console.log(error)
        });
  }

  useEffect(() => {
    ApiGetPillDetail();
    // console.log("DETAIL PILL", detailPill);
  }, []);
  return (
    <>
      <Navbar />
      <Back_Button onClick={() => history.push("/home")} />
      {isShowNotification ? (
        <NotificationCreatedPostSuccess
          message="บันทึกข้อมูลสำเร็จ"
          type="success"
          showIcon
        />
      ) : (
        <>
          <Text_Topic>
            ข้อมูลของยาช่องที่{" "}
            <span style={{ color: "yellow" }}>{paramObjectId.id}</span>
          </Text_Topic>
          <Text_Pill_Name>
            ชื่อยา
            <Span_Field>
              <Input_Pill_Name
                placeholder={detailPill?.pill_name}
                disabled={true}
              />
            </Span_Field>
          </Text_Pill_Name>
          <Text_Task>
            จำนวนยาท้ังหมด
            <Span_Field>
              <Input_Pill_Name
                placeholder={detailPill?.total + "   เม็ด"}
                disabled={true}
              />
            </Span_Field>
          </Text_Task>
          <Text_Task>
            จำนวนยาที่ต้องทาน
            <Span_Field>
              <Input_Pill_Name
                placeholder={detailPill?.pillsPerTime + "   เม็ด"}
                disabled={true}
              />
            </Span_Field>
          </Text_Task>
          {detailPill?.take_times?.map((item: string, index: number) => {
            return (
              <Text_Task key={index}>
                เวลาทานยา <span>เวลาที่ {index + 1}</span>
                <Span_Field>
                  <Input_Pill_Name
                    placeholder={item + "   น."}
                    disabled={true}
                  />
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
          {!detailPill?.real_pill_data && (
            <Text_Check_Input>
            คุณยังไม่ได้กรอกข้อมูลเพิ่มเติม{" "}
            <span style={{ fontWeight: "350" }}>
              กรอกข้อมูลเพื่อที่ระบบจะประมวลผลคุณสมบัติของยา
            </span>
          </Text_Check_Input>
          )}
          
          <Container_Main_Pill_Name>
            <Box_Main_Pill_Name>
              <Span_Main_Pill_Name>
                *ชื่อยาสามัญ
                {/* <Input_Main_Pill_Name type="text" onChange={onChange} value={inputMainPillName} /> */}
                <AutoComplete
                  disabled={!detailPill?.real_pill_data? false : true}
                  options={options}
                  style={{ width: 200 }}
                  onSelect={onSelect}
                  onSearch={onSearch}
                  value={inputRealPillName}
                  onChange={setInputRealPillName}
                  placeholder="input here"
                />
              </Span_Main_Pill_Name>
            </Box_Main_Pill_Name>
            {detailPill?.real_pill_data ? (
              <Button_Save
              onClick={ApiDeleteeRealNameInPillChannelData}
              style={{ backgroundColor: "#ff9e9e", color: "white" }}
            >
              ลบ
            </Button_Save>
            ) : selectRealPllName ? (
              <Button_Save
                onClick={OnSubmitMainPillName}
                style={{ backgroundColor: "#6ADB89", color: "white" }}
              >
                บันทึก
              </Button_Save>
            ) : (
              <Button_Save disabled={true}>บันทึก</Button_Save>
            )}
          </Container_Main_Pill_Name>{" "}
          
          {detailPill?.real_pill_data && (
            <>
              <Text_Topic_Feature>
                คุณสมบัติของยา{detailPill?.real_pill_data.pill_name}
              </Text_Topic_Feature>
              <Text_Topic_Properties>
                สรรพคุณ
                <Span_Field_Properties>
                  {detailPill?.real_pill_data.property}
                </Span_Field_Properties>
              </Text_Topic_Properties>
              <Text_Topic_Properties>
                ผลข้างเคียง
                <Span_Field_Properties>
                  {detailPill?.real_pill_data.effect}
                </Span_Field_Properties>
              </Text_Topic_Properties>
              <Text_Topic_Properties>
                ห้ามกินคู่กับยาอะไร
                <Tooltip
                  placement="right"
                  title={dangerPillInfo}
                  overlayStyle={{ width: "300px" }}
                >
                  <Button_Dont_Eat shape="circle" icon={<QuestionOutlined />} />
                </Tooltip>
                {detailPill?.real_pill_data?.danger_pills?.map((item, index) => {
                  return <Prohibition_Box key={index}>{item.pill_name}</Prohibition_Box>;
                })}
              </Text_Topic_Properties>
            </>
          )}
        </>
      )}
    </>
  );
}

export default DetailPillScreen;
