import React from 'react';
import styles from './NavbarComponent.module.css'
import { Link } from 'react-router-dom'
const NavbarComponent = () => {
  
  return ( 
  <nav className={styles.colorContainer}>
    <h1 className={styles.text}>Test Navbar</h1>
    <ul className={styles.links}>
    <li><Link to="/" >Home</Link></li>
    <li><Link to="/test">Test</Link></li>
    </ul>
  </nav>
  )
}

export default NavbarComponent;