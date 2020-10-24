import React from "react";
import { Layout } from "antd";
import Sidemenu from "./Sidemenu";
import Mainpage from "../Dashboard/Mainpage";
//import Footer from "./Footer";
//import "../../css/styles.css";

const Dashboard = () => {
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sidemenu />
      <Layout className="site-layout">
        <Mainpage />
      </Layout>{" "}
    </Layout>
  );
};
export default Dashboard;
