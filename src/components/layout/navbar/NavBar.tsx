import _ from "lodash";
import React from "react";
import { useNavigate } from "react-router-dom";
import NavBarSearchButton from "./NavBarSearchButton";
import { Settings } from "@mui/icons-material";
import NavBarBrand from "./NavBarBrand";
import NavBarSettings from "./NavBarSettings";

export default function NavBar() {
  return (
    <nav className="w-full h-max px-4 py-2 lg:px-8 lg:py-4 flex justify-between items-center gap-4 lg:gap-12 sticky top-0 bg-white bg-opacity-50 backdrop-blur-sm border-b">
      <NavBarBrand />
      <NavBarSearchButton />
      <NavBarSettings />
    </nav>
  );
}
