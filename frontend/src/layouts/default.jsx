import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  

  return (
    <>
      <Navbar title="Dev Tinder" />
      <Outlet />
    </>
  );
};

export default DefaultLayout;
