import React from 'react'
import { Outlet } from "react-router-dom";
import SideMenu from '../components/SideMenu/SideMenu';
import "./Layout.css"
const Layout = () => {
  return (
    <div className='layout-body'>
      <SideMenu />
      <div className="content">
        <Outlet />
      </div>
    </div>
  )
}

export default Layout