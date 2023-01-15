import React from 'react'
import { Outlet } from 'react-router-dom';
import NavBar from '../../components/home/navBar';

const HomePageLayout = () => {
  return (
    <div>
        <NavBar />
      <Outlet />
    </div>
  )
}

export default HomePageLayout;