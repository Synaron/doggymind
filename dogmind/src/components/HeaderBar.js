import React from 'react'
import Navbar from './Navbar'
import Logo from './Logo'
import '../assets/css/Logo.css'
import '../assets/css/HeaderBar.css'

function HeaderBar() {
  return (
    <div id="HeaderBar">
        <div id='Logo'>
            <Logo />
        </div>
        <div>
            <Navbar />
        </div>
    </div>
  )
}

export default HeaderBar