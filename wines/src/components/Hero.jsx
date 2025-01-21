import React from 'react'
import styles from '../assets/css/Hero.module.css';

const Hero = () => {
  return (
    <>
        <div className={styles.hero}>
            <div className={styles.heroText}>
                <h5>Welcome</h5>
                <h1>WINES FOR EVERYONE</h1>
            </div>
        </div>
    </>
  )
}

export default Hero