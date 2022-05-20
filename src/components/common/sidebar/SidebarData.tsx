import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";

export const SidebarData = [
  {
    title: "Home",
    path: "/home",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "History",
    path: "/history",
    icon: <AiIcons.AiOutlineHistory />,
    cName: "nav-text",
  },
  {
    title: "Forgotten Rate",
    path: "/forgottenRate",
    icon: <BsIcons.BsGraphUp />,
    cName: "nav-text",
  },
  {
    title: "Pill stock",
    path: "/pillstock",
    icon: <FaIcons.FaBoxOpen />,
    cName: "nav-text",
  },
];
