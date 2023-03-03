import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import styles from './Home.module.css'
import ingred from '../../assets/ingred.png'

const Home = () => {
  return (
    <>
    <section className={styles.mainSection}>
      <div className={styles.mainSlogan}>
        <img src={ingred} alt='ingredients' height={400} width={400} style={{
          borderTopLeftRadius: '40px',
          borderBottomLeftRadius: '40px',
          position: 'absolute',
          marginTop: '350px',
          zIndex: '0',
          right: '0',
        }}/>
        <p className={styles.mainSloganText}>Discover new flavors and techniques</p>
        <p className={styles.subSlogan}>Join Culinary Craze and Explore a World of Flavors</p>
        <div>
          <p className={styles.text}>At Culinary Craze, we're passionate about food and cooking. We believe that cooking is an art form, and we're here to help you explore and discover new flavors and techniques from around the world. Whether you're a seasoned chef or just getting started in the kitchen, we've got everything you need to take your cooking to the next level.</p>
        </div>
      </div>
    </section>
    <hr/>
    </>
  )
}

export default Home
