import React, { useState } from "react";
import { Background, ButtonLogin, ButtonLoginForm, ForgetPassword, InputEmail, InputPassword, ModalLogin, TextHeader, TextLogin } from "./Login.style";
import { Redirect } from "react-router-dom";
import { LockFilled, MailFilled } from "@ant-design/icons";
import { useAuthContext } from "./Auth/AuthContext";
import { Space, Spin } from "antd";

function Login() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [email_or_username, set_email_or_username] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { login, accessToken } = useAuthContext();
  const [isClickButton, setIsClickButton] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  if (accessToken) {
    return <Redirect to="/home" />;
  }
  let backgroud_color = "";
  function buttonLogin() {
    login({ email_or_username, password });
    setIsClickButton(true);
    backgroud_color = "#d7d7d7f";
    console.log(isClickButton);
  }

  return (
    <div>
      <Background>
        <TextHeader>กล่องยายินดีต้อนรับ</TextHeader>
        <TextLogin>กรุณาเข้าสู่ระบบเพื่อใช้งาน</TextLogin>
        <ButtonLogin onClick={showModal}>เข้าสู่ระบบ</ButtonLogin>
        <ModalLogin
          title="เข้าสู่ระบบ"
          visible={isModalVisible}
          onCancel={handleCancel}
          closable={false}
          cancelButtonProps={{ style: { display: "none" } }}
          okButtonProps={{ style: { display: "none" } }}
        >
          <InputEmail placeholder="E-mail" size="large" prefix={<MailFilled />} onChange={(event) => set_email_or_username(event.target.value)} required={true} />
          <InputPassword placeholder="Password" size="large" prefix={<LockFilled />} onChange={(event) => setPassword(event.target.value)} />
          <ForgetPassword>ลืมรหัสผ่าน ?</ForgetPassword>
          {isClickButton === false && (
            <ButtonLoginForm style={{ color: backgroud_color }} onClick={buttonLogin}>
              เข้าสู่ระบบ
            </ButtonLoginForm>
          )}

          {isClickButton === true && !accessToken ? (
            <Space size="middle" style={{ marginLeft: "220px" }}>
              <Spin size="large" />
            </Space>
          ) : (
            <></>
          )}
        </ModalLogin>
      </Background>
    </div>
  );
}

export default Login;
