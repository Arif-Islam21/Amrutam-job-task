import { Outlet } from "react-router";
import Navbar from "../Pages/Home/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <h2>Footer here</h2>
    </div>
  );
};

export default MainLayout;
