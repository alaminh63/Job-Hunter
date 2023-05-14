import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Layout/Root";
import Home from "./Pages/Home/Home";
import { DataProvider } from "./Context/Context";
import AppliedJobs from "./Pages/AppliedJobs";
import LoderApplied from "./components/LoaderApplied";
import JobDetails from "./components/JobDetails";
import Blog from "./Pages/Blog";
import ErrorPages from "./Pages/Share/ErrorPages";
import Statistics from "./Pages/Statistics";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPages />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/appliedjobs",
        element: <AppliedJobs></AppliedJobs>,
        loader: LoderApplied,
      },
      {
        path: "/job-details/:id",
        element: <JobDetails />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DataProvider>
      <RouterProvider router={router} />
    </DataProvider>
  </React.StrictMode>
);
