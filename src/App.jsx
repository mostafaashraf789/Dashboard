import React from "react";
import { RouterProvider, createHashRouter } from "react-router-dom";
import Layout from "./component/1-layout/Layout";
import Dashboard from "./component/4-dashboard/Dashboard";
import ManageTeam from "./component/5-manageTeam/ManageTeam";
import Contacts from "./component/6-contacts/Contacts";
import InvoicesBalances from "./component/7-invoicesBalances/InvoicesBalances";
import Profile from "./component/8-profile/Profile";
import Calender from "./component/9-calender/Calender";
import FAQpage from "./component/10-faqPage/FAQpage";
import Barchart from "./component/11-barchart/Barchart";
import Piechart from "./component/12-pieChart/Piechart";
import Linechart from "./component/13-lineChart/Linechart";
import Geopraphy from "./component/14-geography/Geopraphy";

export default function App() {
  const router = createHashRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Dashboard /> },
        { path: "ManageTeam", element: <ManageTeam /> },
        { path: "Contacts", element: <Contacts /> },
        { path: "InvoicesBalances", element: <InvoicesBalances /> },
        { path: "Profile", element: <Profile /> },
        { path: "Calender", element: <Calender /> },
        { path: "FAQpage", element: <FAQpage /> },
        { path: "Barchart", element: <Barchart /> },
        { path: "Piechart", element: <Piechart /> },
        { path: "Linechart", element: <Linechart /> },
        { path: "Geopraphy", element: <Geopraphy /> },
        { path: "*", element: <Dashboard /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
