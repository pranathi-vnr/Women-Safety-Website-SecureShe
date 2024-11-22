import React from 'react'
import { Outlet } from 'react-router-dom'
function Layout() {
  return (
    <div>
   <div style={{minHeight:'110vh'}}>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout