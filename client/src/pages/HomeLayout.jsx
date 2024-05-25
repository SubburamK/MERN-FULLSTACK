import { Outlet } from "react-router-dom"

const HomeLayout = () => {
  return (
  <div>
    <navbar>Navbar</navbar>
    <Outlet />
  </div>
  );
};
export default HomeLayout