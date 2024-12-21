import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div>
      <h2>navbar here</h2>
      <Outlet />
      <h2>Footer here</h2>
    </div>
  );
};

export default MainLayout;
