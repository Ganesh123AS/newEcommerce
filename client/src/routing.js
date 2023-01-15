import React from "react";
import HomePage from "./pages/home/home.page";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Routes, Route, Outlet } from "react-router-dom";
import Register from "./pages/auth/register";
import Login from "./pages/auth/login";
import Cart from "./components/home/cart";
import Products from "./components/home/products";
import Category from "./components/home/category";
import ErrorPage from "./components/home/errorPage.js";
import AdminLayout from "./pages/admin/adminLayout";
import CustomerLayout from "./pages/customer/customerLayout";
import AdminDashboard from "./pages/admin/adminDashboard/adminDashboard";
import AdminAccessControl from "./components/accessControl/accessComponent";
import HomePageLayout from "./pages/home/homePageLayout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css"; 

const Routing = () => {
  return (<>
  <ToastContainer />
  <Routes>
    <Route path="/" element={ <HomePageLayout /> } >
    <Route index element={ <HomePage /> } />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={ <Register /> } />
    </Route>

    {/* <Route exact path="/" element={ <HomePage /> } />
    <Route exact path="/login" element={ <Login /> } />
    <Route exact path="/register" element={ <Register /> } /> */}
    
    {/* <Route exact path="/category" element={ <Category /> } />
    <Route exact path="/products" element={ <Products /> } />
    <Route exact path="/cart" element={ <Cart /> } />  */}
    <Route path="*" element={ <ErrorPage /> } />


    {/* admin section */}
    {/* /api/v1/user/  id post => Create
    /api/v1/user/   get => List All
    /api/v1/user/:id  get => Detail Fetch 
    /api/v1/user/:id put => Update
    /api/v1/user/:id delete => Delete user */}
    <Route path="/admin" element={ <AdminAccessControl Component={ <AdminLayout />} /> }>
        <Route index element={ <AdminDashboard /> } />
        <Route path="user" element={ <Outlet /> } >
            <Route index element={ <> List of all user </>} />
            <Route path="create" element={ <> Create Component </>} />   {/*  Static route should be loaded first */}
            <Route path=":id/" element={ <> Detail of user </>} />       {/*  dynamic route loaded later */}
            <Route path=":id/edit" element={ <> Edit user form </>} />   {/*  dynamic route loaded later */}
        </Route>
    </Route>
    
    {/* <Route path="/admin/user/create" element={ <> Create Component </>} />
    <Route path="/admin/user" element={ <> List of all user </>} />
    <Route path="/admin/user/:id/edit" element={ <> Edit user form </>} />
    <Route path="/admin/user/:id/" element={ <> Detail of user </>} /> */}

        <Route path="/customer" element={ <CustomerLayout /> } >
            <Route path="order" element={ <Outlet /> } >
                <Route index element={ <>Customer all order</>} />
                <Route path="history" element={ <>Customer order history</> } />
                <Route path="review" element={ <>Customer order review</> } />
                <Route path="payhistory" element={ <>Customer shopping expenses history</> } />
            </Route>
            
        </Route>
        <Route path="/customer" element={ <>Customer Dashboard</> } />
       


  </Routes>
  </>)
}

export default Routing;