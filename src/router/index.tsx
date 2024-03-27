import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import App from "../App";
import DeskHome from "../Pages/DeskHome";
import Articles from "../Layout/Articles";
import DashBoard from "../Layout/DashBoard";
import Collection from "../Layout/Collection";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "deskhome",
        element: <DeskHome />,
        children: [
          {
            element: <Navigate to="dashboard" />,
            index: true,
          },
          {
            path: "dashboard",
            element: <DashBoard />,
          },
          {
            path: "articles",
            element: <Articles />,
          },
          {
            path: "collection",
            element: <Collection />,
          },
        ],
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
