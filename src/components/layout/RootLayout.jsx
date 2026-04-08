import { Outlet } from "react-router";
import Navbar from "../pages/navbar/Navbar";
import { ToastContainer } from "react-toastify";

const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <ToastContainer />
    </div>
  );
};

export default RootLayout;
