import { createBrowserRouter } from "react-router-dom";
import AddNewJob from "../components/addNewJob/AddNewJob";
import Layout from "../Layout/Layout";
import Home from "../pages/Home";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/jobs',
        element: <Home />
      },
      {
        path: '/add-new-job',
        element: <AddNewJob />
      },
    ]
  }
]);