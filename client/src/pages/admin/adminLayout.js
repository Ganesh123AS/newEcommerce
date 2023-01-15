import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./adminLayout/sidebar";

const AdminLayout = () => {
  return (
    <div>
      adminLayout
      <Sidebar />
      
    </div>
  )
}

export default AdminLayout;
