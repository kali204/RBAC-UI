import React from "react";
import "./../styles/Dashboard.css";

const UserList = () => {
  const users = [
    { name: "John Doe", email: "johndoe@example.com" },
    { name: "Jane Smith", email: "janesmith@example.com" },
  ];

  return (
    <div className="section-card">
      <h2>User List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.email}</td>
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

export default UserList;
