import { SidebarData } from "./SidebarData";
import { LogoutButton, LogoutImage, PillProfile, Sidebar, TextCenter } from "./Sidebar.style";
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

function Navbar() {
  const { logout } = useAuthContext();
  const [email, setEmail] = useState("");

  useEffect(() => {
    const accessToken: string | null = localStorage.getItem("accessToken");
    const decoded: IJwtToken = jwtDecode(accessToken as string);
    setEmail(decoded.email);
  }, [email]);

  return (
    <>
      <Sidebar className={true ? "nav-menu active" : "nav-menu"}>
        <div className="SidebarList">
          <PillProfile />

          <TextCenter>
            <div style={{ fontSize: "18px" }}>account</div>
            <div style={{ fontSize: "16px" }}>{email}</div>
          </TextCenter>
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
            <LogoutButton onClick={logout}>Logout</LogoutButton>
            <LogoutImage />
          </span>
        </div>
      </Sidebar>
    </>
  );
}

export default Navbar;
