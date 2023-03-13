import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import AddNewJob from "../pages/AddNewJob";
import EditJob from "../pages/EditJob";
import Home from "../pages/Home";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/add-new-job',
        element: <AddNewJob />
      },
      {
        path: '/edit-job',
        element: <EditJob />
      }
    ]
  }
]);