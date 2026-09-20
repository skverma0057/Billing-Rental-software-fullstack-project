import axios from "axios";

const URL = "http://localhost:8000/api/users";

// Add User
export const addUser = async (user) => {
  return await axios.post(URL, user);
};

// Fetch All Users
export const fetchUsers = async () => {
  return await axios.get(URL);
};



// Delete User
export const deleteUser = async (userId) => {
  return await axios.delete(`${URL}/${userId}`);
};




// import axios from "axios";

// const URL = "http://localhost:8000/api/users";

// export const deleteUser = async (userId) => {

//   return await axios.delete(`${URL}/${userId}`);

// };