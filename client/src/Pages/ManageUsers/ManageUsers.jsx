import UserForm from "../../Component/UserForm/UserForm";
import UserList from "../../Component/UserList/UserList";
import "./ManageUsers.css";

const ManageUsers = () => {
  return (
    <div className="Users-container text-light">
      <div className="left-column">
        {/* form 70 */} <UserForm />
      </div>
      <div className="right-column">
        <UserList />
      </div>
    </div>
  );
};

export default ManageUsers;
