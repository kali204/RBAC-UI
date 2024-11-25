import React from "react";
import "./../styles/Dashboard.css";

const AssignRole = () => {
  return (
    <div className="section-card">
      <h2>Assign Role to User</h2>
      <input type="text" placeholder="Enter User Name" />
      <select>
        <option value="">Select Role</option>
        <option value="admin">Admin</option>
        <option value="user">User</option>
        <option value="manager">Manager</option>
      </select>
      <button>Assign Role</button>
    </div>
  );
};

export default AssignRole;
