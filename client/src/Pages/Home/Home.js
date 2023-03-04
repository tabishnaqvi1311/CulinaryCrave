import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import styles from './Home.module.css'
import ingred from '../../assets/ingred.png'
import Grid from '../../components/Grid/Grid'

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
        <div className={styles.textWrap}>
          <p className={styles.text}>At Culinary Craze, we're passionate about food and cooking. We believe that cooking is an art form, and we're here to help you explore and discover new flavors and techniques from around the world. Whether you're a seasoned chef or just getting started in the kitchen, we've got everything you need to take your cooking to the next level.</p>
        </div>
      </div>
    </section>
    <section className={styles.gridSection}>
        <Grid />
        {/* add an image */}
    </section>
    <section className={styles.SwiperRecip}>
      MYSWIPER
    </section>
    <section className={styles.publish}>
      <div className={styles.formDiv}>
        <h1 className={styles.formContent}>Publish Your First Recipe</h1>
        <h4 className={styles.formContent2}>And share it with the rest of the world</h4>
      </div>
      <div className={styles.frm}>
        <form className={styles.formLanding} autoComplete='off'>
          <label for='name'>Your Name</label>
          <input type='text' name='name' required className={styles.formInp}/>
          <label for='email'>Your Email</label>
          <input type='email' name='email' required className={styles.formInp}/>
          <label for='recipeName'>Give your Recipe a Name</label>
          <input type='text' name='recipeName'  required className={styles.formInp}/>
          <label>What did you use?</label>
          <input type='textarea' required className={styles.formInp}/>
          <button type='submit' className={styles.submitButton}>Publish!</button>
        </form>
      </div>
    </section>
    <hr/>
    </>
  )
}

export default Home
