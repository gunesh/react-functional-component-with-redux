import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import { Redirect } from "react-router-dom";
import ApiTest from "../../components/ApiTest";
import CustomHook from "../../components/CustomHook";
import MyState from "../../components/MyState";
import MyContext from "../../components/MyContext";
import Others from "../../components/Others";

const Login = () => {
  return (
    <div className="container main-login-layout">
    <div>
        <h5>Others</h5>
        <Others />
      </div>
      <div>
        <h5>MyContext</h5>
        <MyContext />
      </div>
      <div>
        <h5>Basic My State</h5>
        <MyState />
      </div>
      <div>
        <h5>API TEST</h5>
        <ApiTest />
      </div>
      <div>
        <h5>Custom Hook Test</h5>
        <CustomHook />
      </div>
    </div>
  );
};
export default Login;
