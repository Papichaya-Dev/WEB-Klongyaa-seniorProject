import Navbar from "../../../common/Navbar";
import React, { useEffect, useState } from "react";
import { ApiGetPillChannelDatas } from "../api/Home.api";

const Home = () => {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    ApiGetPillChannelDatas();
  }, []);
  return (
    <>
      <Navbar />
      {/* <div> Home page</div>
      <div style={{ width: "100%", position: "absolute" }}></div> */}
    </>
  );
};

export default Home;
