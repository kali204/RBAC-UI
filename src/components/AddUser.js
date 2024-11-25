import React from "react";
import "./../styles/Dashboard.css";

const AddUser = () => {
  return (
    <div className="section-card">
      <h2>Add New User</h2>
      <input type="text" placeholder="Enter Name" />
      <input type="email" placeholder="Enter Email" />
      <button>Add User</button>
    </div>
  );
};

export default AddUser;
