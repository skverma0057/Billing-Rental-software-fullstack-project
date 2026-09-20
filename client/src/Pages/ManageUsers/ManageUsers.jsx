import { useEffect, useState } from "react";
import UserForm from "../../Component/UserForm/UserForm";
import UserList from "../../Component/UserList/UserList";
import "./ManageUsers.css";
import { fetchUsers as getUsers } from "../../Service/UserService";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadUsers() {
      try {
        setLoading(true);

        const response = await getUsers();

        setUsers(response.data);
      } catch (error) {
        console.error(error);
        // Show error message on top later
      } finally {
        setLoading(false);
      }
    }

    loadUsers();
  }, []);

  return (
    <div className="Users-container text-light">
      <div className="left-column">
        <UserForm setUsers={setUsers} />
      </div>

      <div className="right-column">
        {loading ? (
          <p>Loading users...</p>
        ) : (
          <UserList users={users} setUsers={setUsers} />
        )}
      </div>
    </div>
  );
};

export default ManageUsers;
