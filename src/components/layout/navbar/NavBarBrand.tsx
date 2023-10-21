import React from "react";
import { useNavigate } from "react-router-dom";

export default function NavBarBrand() {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <h1
        onClick={() => navigate("/")}
        className="text-xl cursor-pointer hidden lg:block"
      >
        ghostwriter
      </h1>
      <h1
        onClick={() => navigate("/")}
        className="text-xl cursor-pointer block lg:hidden"
      >
        ghostwriter
      </h1>
    </React.Fragment>
  );
}
