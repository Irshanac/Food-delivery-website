import React from 'react'
import styles from "./Header.module.css"
export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.header_Contents}>
        <h2>Order your favourite food here</h2>
        <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise,one delicious meal at a time</p>
        <button>View meanu</button>
      </div>
    </div>
  )
}
