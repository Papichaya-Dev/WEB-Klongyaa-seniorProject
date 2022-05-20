import { SidebarData } from "./SidebarData";
import { Logout_Button, Logout_Image, Pill_Profile, Sidebar, Text_Center } from "./Sidebar.style";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { useAuthContext } from "components/page/Login/Auth/AuthContext";
import { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";

//===================== CREATE INTERFACE =====================//
interface IJwtToken {
  email: string;
  exp: number;
  iat: number;
  sub: string;
  username: string;
}
const accessToken: string | null = localStorage.getItem("accessToken");

function Navbar() {
  const { logout } = useAuthContext();
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (accessToken) {
      const decoded: IJwtToken = jwtDecode(accessToken);
      console.log("[DECODED SIDEBAR]", decoded.email);
      setEmail(decoded.email);
    }
  }, []);

  return (
    <>
      <Sidebar className={true ? "nav-menu active" : "nav-menu"}>
        <div className="SidebarList">
          <Pill_Profile />

          <Text_Center>
            <div style={{ fontSize: "18px" }}>account</div>
            <div style={{ fontSize: "16px" }}>{email}</div>
          </Text_Center>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName} id={window.location.pathname === item.path ? "active" : ""}>
                <Link to={item.path}>
                  {item.icon}
                  <span className="span_text" id={window.location.pathname === item.path ? "active" : ""}>
                    {item.title}
                  </span>
                </Link>
              </li>
            );
          })}
          <span>
            <Logout_Button onClick={logout}>Logout</Logout_Button>
            <Logout_Image />
          </span>
        </div>
      </Sidebar>
    </>
  );
}

export default Navbar;
