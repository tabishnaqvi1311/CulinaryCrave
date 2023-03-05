import React from 'react'
import styles from './RecipeListing.module.css';
import { useState, useEffect } from 'react';
const RecipeListing = () => {

  const [myRecipes, setmyRecipes] = useState([]);

  useEffect(()=>{
    fetch('/api/recipes')
      .then(response => response.json())
      .then(data => setmyRecipes(data));  
    }, []);
    console.log(myRecipes);
    
  return (
    <>
    <div>
      <h1 className={styles.topPicks}>Today's Top Picks</h1>
      <div className={styles.threepicks}>
        <div className={styles.pick1}>item1</div>
        <div className={styles.pick2}>item2</div>
        <div className={styles.pick3}>item3</div>
      </div>
    </div>
    <hr className={styles.hori}/>
    <div className={styles.recipeList}>
        <div key={myRecipes._id} className={styles.recipeCard}>
          <h2>{myRecipes.name}</h2>
          <p>Rating: {myRecipes.rating}</p>
        </div>
    </div>
    </>
  )
}

export default RecipeListing