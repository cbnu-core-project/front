import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <div className="bg-orange-400 h-10"></div>
      <Outlet />
      <div className="bg-green-400 h-10"></div>
    </>
  );
}

export default Layout;
