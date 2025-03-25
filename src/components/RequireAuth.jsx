import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'



function RequireAuth() {
   

    const location = useLocation()

    console.log('Location Object in reqAuth(Wrapper-Component):', location);

    const authenticatedUser = true
    if (!authenticatedUser) {
        return <Navigate to='/login' state={{from:location}} replace/>
    }

  
  return <Outlet/>
}

export default RequireAuth