import { RouterProvider } from "react-router-dom";
import { StyledEngineProvider } from "@mui/material";

import router from "./components/layout/router";

export default function App() {
  return (
    <StyledEngineProvider injectFirst>
      <RouterProvider router={router} />
    </StyledEngineProvider>
  );
}
