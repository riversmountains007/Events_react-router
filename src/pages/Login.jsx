import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function Login() {
  
    const [userName,setUserName] = useState('')
    const [password,setPassword] = useState('')
  
    
    const navigate = useNavigate()
    const location = useLocation()

    const intended = location.state?.from?.pathname || '/'

    console.log('inteded to go',intended);
    
    console.log('Location Object in Login:', location);

    const handleSubmit = (e)=>{
        e.preventDefault()
        
        const userExists = true
        if(!userExists) return <h2>404 - User Not Found</h2>

        navigate(intended,{replace:true})

    }

  return (
    <>
    <form onSubmit={handleSubmit}>
    <input 
    type="text"
    placeholder='username'
    onChange={(e)=>setUserName(e.target.value)}
    value={userName}
    />

    <input 
    type='password' 
    placeholder='password'
    value={password}
    onChange={(e)=>setPassword(e.target.value)}
    
    />

    <button type='submit'>Submit</button>
    </form>
   



    </>
  )
}

export default Login