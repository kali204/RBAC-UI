import React from "react";
import "./../styles/Dashboard.css";

const RoleList = () => {
  const roles = ["Admin", "User", "Manager"];

  return (
    <div className="section-card">
      <h2>Role List</h2>
      <table>
        <thead>
          <tr>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role, index) => (
            <tr key={index}>
              <td>{role}</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RoleList;
