import React from 'react'
import { SquareMenu, Volume2, SquarePen, User, Flower } from 'lucide-react';
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className='sidebar-cont'>
        <div className='sidebar-logo'>
            <Flower/>
            <p>LOGO</p>
        </div>
        <div className='sidebar-menu'>
            <div>
                <SquareMenu className='icon'/>
                <p>Dashboard</p>
            </div>
            <div className='portfolio-div'>
                <Volume2 className='icon portfolio-icon'/>
                <p className='portfolio-icon'>Portfolio</p>
            </div>
            <div>
                <SquarePen className='icon'/>
                <p>Inputs</p>
            </div>
            <div>
                <User className='icon'/>
                <p>Profile</p>
            </div>
        </div>
    </div>
  )
}

export default Sidebar