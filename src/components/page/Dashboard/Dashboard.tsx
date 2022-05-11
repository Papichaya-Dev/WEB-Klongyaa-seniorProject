import React, { useState } from "react";
import { Background, Button_Login, Button_Login_Form, Forget_Password, Input_Email, Input_Password, Modal_Login, Text_Header, Text_Login } from "./Dashboard.style";
import { useHistory } from "react-router-dom";
import { LockFilled, MailFilled } from "@ant-design/icons";

function Dashboard() {
  const history = useHistory();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div>
      <Background>
        <Text_Header>กล่องยายินดีต้อนรับ</Text_Header>
        <Text_Login>กรุณาเข้าสู่ระบบเพื่อใช้งาน</Text_Login>
        <Button_Login onClick={showModal}>เข้าสู่ระบบ</Button_Login>
        <Modal_Login
          title="เข้าสู่ระบบ"
          visible={isModalVisible}
          onCancel={handleCancel}
          closable={false}
          cancelButtonProps={{ style: { display: "none" } }}
          okButtonProps={{ style: { display: "none" } }}
        >
          <Input_Email placeholder="E-mail" size="large" prefix={<MailFilled />} />
          <Input_Password placeholder="Password" size="large" prefix={<LockFilled />} />
          <Forget_Password>ลืมรหัสผ่าน ?</Forget_Password>
          <Button_Login_Form onClick={() => history.push("/home")}>เข้าสู่ระบบ</Button_Login_Form>
        </Modal_Login>
      </Background>
    </div>
  );
}

export default Dashboard;
