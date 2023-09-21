import React from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const navigate=useNavigate()
    const handleClick=()=>{
        // localStorage.clear();
        // window.location.reload();
        navigate("/SignUp")
    }
  return (
  <>
  <div className='Home'>
    New Website
    
  </div>
  <button className='logout' onClick={handleClick}>Log Out</button>
  </>
  )
}

export default Home