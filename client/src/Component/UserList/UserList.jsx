// this is temperelly

/*const UserList = ({ users, setUsers }) => {
  return (
    <div>
      <h3>User List</h3>

      {users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        users.map((user) => (
          <div key={user.id}>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <hr />
          </div>
        ))
      )}
    </div>
  );
};

export default UserList;*/

import { useState } from "react";
import { deleteUser } from "../../Service/UserService.js";
import "./UserList.css";

const UserList = ({ users, setUsers }) => {
  const [searchTerm, setSearchTerm] = useState("");

  // Search users by name or email
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  // Delete user
  const deleteByUserId = async (userId) => {
    try {
      const response = await deleteUser(userId);

      if (response.status === 204) {
        setUsers((prev) => prev.filter((user) => user.id !== userId));
      }
    } catch (error) {
      console.error("Error deleting user:", error);

      console.error("Backend response:", error.response?.data);

      alert(error.response?.data?.message || "Failed to delete user");
    }
  };

  return (
    <div
      className="user-list-container"
      style={{
        height: "100%",
        overflowY: "auto",
        overflowX: "hidden",
      }}
    >
      {/* Search Box */}

      <div className="row pe-2">
        <div className="input-group mb-3">
          <input
            type="text"
            name="keyword"
            id="keyword"
            placeholder="Search by keyword"
            className="form-control"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <span className="input-group-text bg-warning">
            <i className="bi bi-search"></i>
          </span>
        </div>
      </div>

      {/* User List */}

      <div className="row g-3 pe-2">
        {filteredUsers.length === 0 ? (
          <div className="text-white">No users found.</div>
        ) : (
          filteredUsers.map((user) => (
            <div key={user.id} className="col-12">
              <div className="user-card">
                {/* User Information */}

                <div className="user-info">
                  <h5>{user.name}</h5>

                  <p>{user.email}</p>
                </div>

                {/* Delete Button */}

                <div>
                  <button
                    type="button"
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteByUserId(user.id)}
                  >
                    <i className="bi bi-trash"></i>
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default UserList;
