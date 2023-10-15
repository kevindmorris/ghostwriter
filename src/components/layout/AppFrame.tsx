import React from "react";
import NavBar from "./navbar/NavBar";
import { Outlet } from "react-router-dom";

export default function AppFrame() {
  return (
    <React.Fragment>
      <NavBar />
      <Outlet />
    </React.Fragment>
  );
}
