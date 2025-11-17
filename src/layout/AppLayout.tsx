import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";

const AppLayout: React.FC = () => {
  return (
    <>
      <Navbar />
      <main>
        {/* Content will be rendered here based on routing */}
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default AppLayout;
