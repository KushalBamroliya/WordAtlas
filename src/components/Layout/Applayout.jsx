import React from 'react'
import Headers from '../UI/Headers'
import Footer from '../UI/Footer'
import { Outlet } from 'react-router-dom'


function Applayout() {
  return (
    <div className="layout-wrapper">
      <Headers />
      <main className="layout-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Applayout