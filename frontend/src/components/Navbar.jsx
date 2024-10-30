import React from 'react'
import User from '../assets/user.png';
import { BellRing, ChevronDown } from 'lucide-react';
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='nav-cont'>
        <div className='nav-items'>
        <BellRing/>
        <div className='user'>
            <div>
                <img src={User} alt="" />
            </div>
            <div>
                <p><b>Lorem Ips</b></p>
                <p>Manager</p>
            </div>
        </div>
        <ChevronDown/>
        </div>      
    </div>
  )
}

export default Navbar