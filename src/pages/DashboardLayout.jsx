import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function DashboardLayout() {
  return (
      <>
          <div className="sidebar">
              <h2>Sidebar</h2>
                <ul>
                  <li><Link to="/dashboard">Profile</Link></li>
                  <li><Link to="/dashboard/settings">Settings</Link></li>
                  <li><Link to="/dashboard/events">Events</Link></li>
                </ul>
              
          </div>
          
          <div className="content">
              <Outlet/> {/* childern component render here */}
          </div>
      </>
  )
}

export default DashboardLayout