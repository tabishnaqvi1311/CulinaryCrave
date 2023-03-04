import React from 'react'
import styles from './Grid.module.css'

const Grid = () => {
  return (
    <div className={styles.FlexContainerGrid}>
        <div className={styles.ContainerGrid}>
            <div className={styles.Area1}>Out of a key ingredient? No problem. </div>
            <div className={styles.Area2}>Join a passionate community of food lovers, share your recipes and cooking tips, and connect with like-minded individuals from around the world.</div>
            <div className={styles.Area3}>Explore thousands of recipes from around the world</div>
            <div className={styles.Area4}>Intuitive recipe creator to build your own custom recipes save them to your account, and share with the community.</div>
        </div>
    </div>
  )
}

export default Grid