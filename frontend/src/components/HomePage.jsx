import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import './HomePage.css'
import Portfolio from './Portfolio'

const HomePage = () => {
  return (
    <div className='home-container'>
        <Sidebar/>
        <div>
          <Navbar/>
          <Portfolio/>
        </div>
    </div>
  )
}

export default HomePage