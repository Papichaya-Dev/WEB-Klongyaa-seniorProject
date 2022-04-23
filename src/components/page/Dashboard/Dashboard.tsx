import React from "react";
import { Background, Button_Login, Text_Header, Text_Login } from "./Dashboard.style";
import { useHistory } from "react-router-dom";
function Dashboard() {
  const history = useHistory();

  return (
    <div>
      <Background>
        <Text_Header>กล่องยายินดีต้อนรับ</Text_Header>
        <Text_Login>กรุณาเข้าสู่ระบบเพื่อใช้งาน</Text_Login>
        <Button_Login onClick={() => history.push("/home")}>เข้าสู่ระบบ</Button_Login>
      </Background>
    </div>
  );
}

export default Dashboard;
