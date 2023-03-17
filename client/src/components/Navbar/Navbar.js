import React from 'react'
import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import cook from '../../assets/cook.png'

const Navbar = () => {
  return (
    <>
      <nav className={styles.wrap}>
        <div className={styles.left}>
          <img className={styles.navimg} src={logo} alt='logo' height='100px' width='100px' style={{
            borderRadius: '50px'
          }}/>
        </div>
        <div className={styles.center}>
          <ul className={styles.navbarItems}>
            <li className={styles.items}>
              <Link to='/'>Home</Link>
            </li>
            <li className={styles.items}>
              <Link to='/recipeListing'>Recipes</Link>
            </li>
            <li className={styles.items}> 
              <Link to='/categories'>Categories</Link>
            </li>
            <li className={styles.items}>
              <Link to='/blog'>Blog</Link>
            </li>
          </ul>
        </div>
        <div className={styles.right}>
          <input type='text' placeholder='Search'/> 
          {/* add style here  */}
        </div>
      </nav>
      <hr/>
      </>
  )
}

export default Navbar
