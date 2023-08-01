/* eslint-disable no-unused-vars */
import React from 'react'
import Logo from '../img/logo.png'

const Footer = () => {
  return (
    <footer className=''>
      <img src={Logo} alt='logo' />
      <span>Made with ♥️ and <b>React.js</b>.</span>
    </footer>
  )
}

export default Footer