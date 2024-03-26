import React from 'react'
import './Nav.css'
import { Link,useLocation } from 'react-router-dom'


function Nav() {
  const Location = useLocation();
  if(Location.pathname === "/UserUI"){
    return null;
  }
  return (
    <div className='nav'>
        <h2 className='nav-brand'>Pet Minder!</h2>
        <ul className='menu'>
            <li><Link to="/" style={{textDecoration: "none"}} className='menu-btn'>Home</Link></li>
            <li><Link to="/newblog" style={{textDecoration: "none"}} className='menu-btn'>Become a sitter!</Link></li>
            <li><Link to="/UserUI" style={{textDecoration: "none"}} className='menu-btn'>Become a sitter!</Link></li>
        </ul>
    </div>
  )
}

export default Nav