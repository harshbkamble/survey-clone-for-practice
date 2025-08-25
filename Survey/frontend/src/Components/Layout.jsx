import React from 'react'
import Navbar from './Navbar.jsx'
import Sidebar from './Sidebr.jsx'

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <main>
          <h2>Main Content Area</h2>
        </main>
      </div>
    </div>
  )
}

export default Layout
