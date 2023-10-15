import { RouterProvider } from "react-router-dom";
import router from "./components/layout/router";

export default function App() {
  return <RouterProvider router={router} />;
}
