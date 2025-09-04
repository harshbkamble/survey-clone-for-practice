import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import Sidebar from './Sidebr.jsx'


const Layout = () => {
  return (
    <div>
      <Navbar />
      <div style={{ display: 'flex', marginTop: '10px' }} className="main-content-layout">
        {/* <Sidebar /> */}
         <main className="flex-1 p-2 mt-2 ml-64">
          <Outlet />
       
        </main>
      </div>
    </div>
  )
}

export default Layout