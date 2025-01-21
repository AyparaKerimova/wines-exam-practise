import React from 'react'
import styles from '../assets/css/Owners.module.css';

const Owners = () => {
  return (
    <>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-4 col-sm-12 col-md-6 d-flex flex-column'>
                    <img className={styles.ownerImg} src="https://media.glamourmagazine.co.uk/photos/651ed6cff0d2c7f4c5360ab8/16:9/w_1920,h_1080,c_limit/COZY%20AUTUMN%20MAKEUP%20051023%20default.jpg" alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque neque cupiditate aliquid maxime consequatur facilis velit aperiam molestiae ad illum excepturi deleniti veniam aut, saepe quae, error ipsum nesciunt recusandae?</p>
                    <p>Collin Miller</p>
                </div>
                <div className='col-lg-4 col-sm-12 col-md-6 d-flex flex-column'>
                    <img className={styles.ownerImg}  src="https://media.glamourmagazine.co.uk/photos/651ed6cff0d2c7f4c5360ab8/16:9/w_1920,h_1080,c_limit/COZY%20AUTUMN%20MAKEUP%20051023%20default.jpg" alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque neque cupiditate aliquid maxime consequatur facilis velit aperiam molestiae ad illum excepturi deleniti veniam aut, saepe quae, error ipsum nesciunt recusandae?</p>
                    <p>Collin Miller</p>
                </div>
                <div className='col-lg-4 col-sm-12 col-md-6 d-flex flex-column'>
                    <img className={styles.ownerImg}  src="https://media.glamourmagazine.co.uk/photos/651ed6cff0d2c7f4c5360ab8/16:9/w_1920,h_1080,c_limit/COZY%20AUTUMN%20MAKEUP%20051023%20default.jpg" alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque neque cupiditate aliquid maxime consequatur facilis velit aperiam molestiae ad illum excepturi deleniti veniam aut, saepe quae, error ipsum nesciunt recusandae?</p>
                    <p>Collin Miller</p>
                </div>
            </div>
        </div>
        
    </>
  )
}

export default Owners