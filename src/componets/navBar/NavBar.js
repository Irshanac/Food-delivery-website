import React, { useState } from 'react'
import styles from "./Nav.module.css"
import { assets } from '../../frontend_assets/assets'
export default function NavBar() {
  const [menu,setmenu]=useState("Home");
  return (
   
    <div className={styles.navbar}>
      <img src={assets.logo} alt='' className={styles.logo}></img>
      <ul className={styles.navbar_menu}>
        <li onClick={()=>{setmenu("Home")}} className={menu==="Home"?styles.active:""}>Home</li>
        <li onClick={()=>{setmenu("Menu")}} className={menu==="Menu"?styles.active:""}>Menu</li>
        <li  onClick={()=>{setmenu("Mobile-app")}}className={menu==="Mobile-app"?styles.active:""}>Mobile app</li>
        <li onClick={()=>setmenu("Contact-us")} className={menu==="Contact-us"?styles.active:""}>Contact us</li>
      </ul>
      <div className={styles.navbar_right}>
        <img alt='' src={assets.search_icon}></img>
        <div className={styles.navbar_basket}>
          <img alt='' src={assets.basket_icon}></img>
          <div className={styles.dot}> </div>
        </div>
        <button>Sign in</button>
       
      </div>
    </div>
  )
}
