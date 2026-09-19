import { Routes, useLocation } from "react-router-dom";
import MenuBar from "./Component/MenuBar/Menubar.jsx";
import { Route } from "react-router-dom";
import DashBoard from "./Pages/DashBoard/DashBoard.jsx";
import ManageCategory from "./Pages/ManageCategory/ManageCategory.jsx";
import ManageUsers from "./Pages/ManageUsers/ManageUsers.jsx";
import ManageItems from "./Pages/Manageitems/Manageitems.jsx";
import Explore from "./Pages/Explore/Explore.jsx";
import Login from "./Pages/Login/Login.jsx";

function App() {
  const location = useLocation();
  return (
    <>
      {location.pathname !== "/login" && <MenuBar />}

      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/category" element={<ManageCategory />} />
        <Route path="/users" element={<ManageUsers />} />
        <Route path="/items" element={<ManageItems />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<DashBoard />} />
      </Routes>
    </>
  );
}

export default App;
