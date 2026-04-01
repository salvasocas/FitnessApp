import { Outlet } from "react-router-dom";
import Sidebar from "../components/ui/Sidebar";
import BottonNav from "../components/ui/BottonNav";

const Layout = () => {
  return (
    <div className="layout-container">
      <Sidebar />
      <div className="flex-1 overflow-y-scroll">
        <Outlet />
      </div>
      <BottonNav />
    </div>
  );
};

export default Layout;
