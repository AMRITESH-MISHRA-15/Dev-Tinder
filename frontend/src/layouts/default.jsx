import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <div className="my-container">
      <Navbar title="Dev Tinder" />
      <Outlet />
    </div>
  );
};

export default DefaultLayout;
