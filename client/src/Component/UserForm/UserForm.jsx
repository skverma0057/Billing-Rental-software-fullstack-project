import { useState } from "react";
import { addUser } from "../../Service/UserService";

const UserForm = ({ setUsers }) => {
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    role: "ROLE_USER",
  });

  const onChangerHandler = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await addUser(data);

      setUsers((prevUsers) => [...prevUsers, response.data]);

      // Clear form
      setData({
        name: "",
        email: "",
        password: "",
        role: "ROLE_USER",
      });
    } catch (error) {
      console.error(error);
      // Show error message later
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-2 mt-2">
      <div className="row">
        <div className="card col-md-12 form-container">
          <div className="card-body">
            <form onSubmit={onSubmitHandler}>
              {/* Name */}
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  id="name"
                  className="form-control"
                  placeholder="John Doe"
                  onChange={onChangerHandler}
                  value={data.name}
                  required
                />
              </div>

              {/* Email */}
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form-control"
                  placeholder="yourname@example.com"
                  onChange={onChangerHandler}
                  value={data.email}
                  required
                />
              </div>

              {/* Password */}
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>

                <input
                  type="password"
                  name="password"
                  id="password"
                  className="form-control"
                  placeholder="Enter password"
                  onChange={onChangerHandler}
                  value={data.password}
                  required
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="btn btn-warning w-100"
                disabled={loading}
              >
                {loading ? "Loading..." : "Save"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserForm;
