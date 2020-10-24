import React from "react";
import "../../css/styles.scss";
import { Route, Switch } from "react-router-dom";
import Report from "./DashboardComponents/Report";
import Users from "./DashboardComponents/Users";
import Message from "./DashboardComponents/Message";
import Complaint from "./DashboardComponents/Complaint";

const Mainpage = () => {
  return (
    <div className=" p-5 site-layout">
      <Switch>
        {" "}
        <Route path="/dashboard/Report" component={Report} />{" "}
        <Route path="/dashboard/users" component={Users} />{" "}
        <Route path="/dashboard/message" component={Message} />
        <Route path="/dashboard" exact component={Complaint} />{" "}
      </Switch>{" "}
    </div>
  );
};
export default Mainpage;
