import { Routes, Route } from "react-router";
import MainLayout from "../Layouts/MainLayout";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />} />
    </Routes>
  );
};

export default AppRoutes;
