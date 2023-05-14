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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
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
