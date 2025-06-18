import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <>
      <Navbar title="Dev Tinder" />
      <main className="">
        <Outlet />
      </main>
    </>
  );
};

export default DefaultLayout;
