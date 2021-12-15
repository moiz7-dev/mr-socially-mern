import React from "react";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import Footer from "./Footer";
import './Layout.scss';
import RightSidebar from "./RightSidebar/RightSidebar";

const Layout = ({ children }) => {
    console.log('children', children)
  return (
    <div className='layout-container'>
      <header className="header">
        <Header />
      </header>
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="body">
        {children}
      </div>
      <div className="right-sidebar">
        <RightSidebar />
      </div>
      <footer className="footer">
          <Footer />
      </footer>
    </div>
  );
};

export default Layout;