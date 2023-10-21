import { RouteObject, createBrowserRouter } from "react-router-dom";
import AppFrame from "./AppFrame";
import HomePage from "../pages/home/HomePage";
import WordPage from "../pages/word/WordPage";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <AppFrame />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "q/:q", element: <WordPage /> },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
