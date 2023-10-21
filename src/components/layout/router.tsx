import { RouteObject, createBrowserRouter } from "react-router-dom";
import AppFrame from "./AppFrame";
import HomePage from "../pages/home/HomePage";
import QueryPage from "../pages/query/QueryPage";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <AppFrame />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "q/:q", element: <QueryPage /> },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
