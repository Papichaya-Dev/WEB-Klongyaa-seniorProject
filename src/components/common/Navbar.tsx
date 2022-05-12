import React, { useState } from "react";

import { SidebarData } from "./SidebarData";
import "./Navbar.css";
import { Logout_Button, Logout_Image, Pill_Profile, Sidebar, Text_Center } from "./Navbar.style";
import { Link } from "react-router-dom";

function Navbar() {
  const [sidebar, setSidebar] = useState(true);

  return (
    <>
      <Sidebar className={sidebar ? "nav-menu active" : "nav-menu"}>
        <div>
          <li className="navbar-toggle">
            <Link to="#">
              <Pill_Profile />
            </Link>
          </li>
          <Text_Center>
            <div>username</div>
            <div>klongyaa.user@gmail.com</div>
          </Text_Center>
          {SidebarData.map((item: any, index: any) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span className="span_text">{item.title}</span>
                </Link>
              </li>
            );
          })}
          <span>
            <Logout_Button>Logout</Logout_Button>
            <Logout_Image />
          </span>
        </div>
      </Sidebar>
    </>
  );
}

export default Navbar;
