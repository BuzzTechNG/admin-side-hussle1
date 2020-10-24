import React, { useState } from "react";

import { Layout, Menu } from "antd";
import {
  WalletOutlined,
  PieChartOutlined,
  FieldTimeOutlined,
  CreditCardOutlined,
} from "@ant-design/icons";

//import "../css/Dashboardstyle.scss";
import { NavLink } from "react-router-dom";

const Sidemenu = () => {
  const { Sider } = Layout;

  const [collapse, collapseToggler] = useState(false);

  const onCollapse = () => {
    collapseToggler(!collapse);
  };

  return (
    <Sider collapsible collapsed={collapse} onCollapse={onCollapse}>
      <div className="my-5">
        <img
          src={require("../../assets/logo-with-name.png")}
          alt="SideHussle Logo"
          title="Sidehussle Logo"
          style={{
            width: "100%",
            height: "100%",
            padding: 10,
            background: "gray",
            marginBottom: "30px",
          }}
        ></img>
      </div>
      <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
        <Menu.Item key="1" icon={<PieChartOutlined />}>
          <NavLink to="/dashboard" exact className="sideLink">
            Complaint{" "}
          </NavLink>{" "}
        </Menu.Item>{" "}
        <Menu.Item key="6" icon={<WalletOutlined />}>
          <NavLink to="/dashboard/report" className="sideLink">
            Report{" "}
          </NavLink>{" "}
        </Menu.Item>{" "}
        <Menu.Item key="7" icon={<FieldTimeOutlined />}>
          <NavLink to="/dashboard/message" className="sideLink">
            Message
          </NavLink>{" "}
        </Menu.Item>{" "}
        <Menu.Item key="8" icon={<CreditCardOutlined />}>
          <NavLink to="/dashboard/users" className="sideLink">
            Users{" "}
          </NavLink>{" "}
        </Menu.Item>{" "}
      </Menu>{" "}
    </Sider>
  );
};

export default Sidemenu;
