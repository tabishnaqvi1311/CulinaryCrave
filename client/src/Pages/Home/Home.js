import React from 'react'
import styles from './Home.module.css'
import ing from '../../assets/ingred.png'
import Grid from '../../components/Grid/Grid'
import { useState } from 'react'
import SwiperC from '../../components/Swiper/SwiperC'

const Home = () => {

  const [userName, setuserName] = useState('');
  const [userEmail, setuserEmail] = useState('');
  const [RecipeName, setRecipeName] = useState('');
  const [ingred, setingred] = useState('');

  const submitUser = async () => {
    const response = await fetch('http://localhost:8181/submit', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        userName: userName,
        userEmail: userEmail,
        recipeName: RecipeName,
        ingreds: ingred 
      })
    });

    const json = await response.json();
    console.log(json);
    setuserName('')
    setuserEmail('')
    setRecipeName('')
    setingred('')
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    await submitUser();
  }

  return (
    <>
    <section className={styles.mainSection}>
      <div className={styles.mainSlogan}>
        <img className={styles.imgtop} src={ing} alt='ingredients' height={400} width={400} style={{
          borderTopLeftRadius: '40px',
          borderBottomLeftRadius: '40px',
          position: 'absolute',
          marginTop: '100px',
          zIndex: '0',
          right: '0',
          boxShadow: '0px 0px 10px 1px grey'
        }}/>
        <p className={styles.mainSloganText}>Discover new flavors and techniques</p>
        <p className={styles.subSlogan}>Join Culinary Craze and Explore a World of Flavors</p>
        <div className={styles.textWrap}>
          <p className={styles.text}>At Culinary Craze, we're passionate about food and cooking. We believe that cooking is an art form, and we're here to help you explore and discover new flavors and techniques from around the world. Whether you're a seasoned chef or just getting started in the kitchen, we've got everything you need to take your cooking to the next level.</p>
        </div>
      </div>
    </section>
    <section className={styles.SwiperRecip}>
      <SwiperC />
    </section>
    <section className={styles.gridSection}>
        <Grid />
        {/* add an image */}
    </section>
    <section className={styles.publish}>
      <div className={styles.formDiv}>
        <h1 className={styles.formContent}>Publish Your First Recipe</h1>
        <h4 className={styles.formContent2}>And share it with the rest of the world</h4>
      </div>
      <div className={styles.frm}>
        <form className={styles.formLanding} autoComplete='off' onSubmit={handleSubmit}>

          <label for='name'>Your Name</label>
          <input type='text' name='name' required className={styles.formInp} value={userName} onChange={event => setuserName(event.target.value)}/>

          <label for='email'>Your Email</label>
          <input type='email' name='email' required className={styles.formInp} value={userEmail} onChange={event =>setuserEmail(event.target.value)}/>

          <label for='recipeName'>Give your Recipe a Name</label>
          <input type='text' name='recipeName'  required className={styles.formInp} value={RecipeName} onChange={event => setRecipeName(event.target.value)}/>

          <label>What did you use?</label>
          <input type='textarea' required className={styles.formInp} value={ingred} onChange={event => setingred(event.target.value)}/>

          <button type='submit' className={styles.submitButton}>Publish!</button>
        </form>
      </div>
    </section>
    <hr/>
    </>
  )
}

export default Home
