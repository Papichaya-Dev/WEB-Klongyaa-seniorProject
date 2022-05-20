import React, { useEffect, useState } from "react";
import { Background, Button_Login, Button_Login_Form, Forget_Password, Input_Email, Input_Password, Modal_Login, Text_Header, Text_Login } from "./Login.style";
import { Redirect, useHistory } from "react-router-dom";
import { LockFilled, MailFilled } from "@ant-design/icons";
import { useAuthContext } from "./Auth/AuthContext";

function Login() {
  const history = useHistory();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [email_or_username, set_email_or_username] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { login, accessToken } = useAuthContext();
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  if (accessToken) {
    return <Redirect to="/home" />;
  }

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
          <Input_Email placeholder="E-mail" size="large" prefix={<MailFilled />} onChange={(event) => set_email_or_username(event.target.value)} required={true} />
          <Input_Password placeholder="Password" size="large" prefix={<LockFilled />} onChange={(event) => setPassword(event.target.value)} />
          <Forget_Password>ลืมรหัสผ่าน ?</Forget_Password>
          <Button_Login_Form onClick={() => login({ email_or_username, password })}>เข้าสู่ระบบ</Button_Login_Form>
        </Modal_Login>
      </Background>
    </div>
  );
}

export default Login;
