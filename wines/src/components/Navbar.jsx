import React from 'react'
import styles from '../assets/css/Navbar.module.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
        <div className={styles.header}>
            <img src="https://preview.colorlib.com/theme/wines/images/logo.png" alt="" />
            <div className={styles.navbar}>
                <i className="fa-solid fa-bars"></i>
                <div className={styles.navItems}>
                    <Link to="/" className={styles.navItem}>Home</Link>
                    <Link to="add-wine" className={styles.navItem}>Add Wine</Link>
                    <Link to="basket" className={styles.navItem}>Basket</Link>
                    <Link to="wishlist" className={styles.navItem}>Wishlist</Link>
                    <Link to="about" className={styles.navItem}>About</Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar