import React, { Component } from "react";
import TodoInput from "../../components/TodoInput";
import TodoList from "../../components/TodoList";

const Dashboard = () => {
  return (
    <div className="container main-login-layout">
      <TodoInput />
      <TodoList />
    </div>
  );
};
export default Dashboard;