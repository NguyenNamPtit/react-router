import React from "react";
import { Outlet } from "react-router";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const Layout = () => {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Outlet />
      </main>

      <Footer />
    </React.Fragment>
  );
};

export default Layout;
