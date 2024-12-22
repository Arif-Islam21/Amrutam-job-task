import { Routes, Route } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Banner from "../Pages/Home/Banner";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Banner />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
