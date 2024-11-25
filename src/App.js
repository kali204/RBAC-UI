import React from "react";
import AddUser from "./components/AddUser";
import AssignRole from "./components/AssignRole";
import UserList from "./components/UserList";
import RoleList from "./components/RoleList";
import "./styles/Dashboard.css";

const App = () => {
  return (
    <div className="container">
      <h1>RBAC System</h1>
      <AddUser />
      <AssignRole />
      <UserList />
      <RoleList />
    </div>
  );
};

export default App;
