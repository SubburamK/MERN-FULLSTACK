import { Outlet } from "react-router-dom";
import Wrapper from "../assets/wrappers/Dashboard";
import { BigSideBar, Navbar, SmallSideBar } from "../components";
import { useContext, useState } from "react";

const DashboardContext = createContext()

const DashboardLayout = () => {
  const user = {name:'Subbu'}
  const [showSidebar,setShowSidebar] = useState(false)
  const [isDarkTheme,setDarkTheme] = useState(false)

  const toggleDarkTheme = () =>{
    console.log('toggled dark theme');
  };

  const toggleSidebar = () =>{
    setShowSidebar(!showSidebar);
  };
  
  const logoutUser = async () => {
    console.log('logout user');
  };

  return (
    <DashboardContext.Provider value={{
      user,
      showSidebar,
      isDarkTheme,
      toggleDarkTheme,
      toggleSidebar,
      logoutUser,
    }}>
    <Wrapper>
      <main className="dashboard">
        <SmallSideBar />
        <BigSideBar />
        <div>
          <Navbar />
          <div className="dashboard-page">
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
    </DashboardContext.Provider>
  );
};
export const useDashboardContext = () => useContext(DashboardContext)
export default DashboardLayout