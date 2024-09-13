import React from 'react'
import './header.css'
import styles from './header.module.css';

export default function header() {
    // const myStyle = {
    //     color : "green",
    //     backgroundColor: "antiquewhite",
    //     padding: "50px",
    //     textAlign: "center",
    //     fontFamily: "cursive"
    // }
  return (
    <div>
        <h1 >Lorem, ipsum.</h1>
        <h2 >Lorem ipsum dolor sit amet.</h2>
        <h3 >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit.</h3>
        <p className={styles.lora}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt ex animi adipisci natus, tenetur perferendis mollitia tempora maiores sint officia accusantium, provident perspiciatis laborum in? Error aliquid iste quaerat, voluptatibus, facere dolore quidem sed reiciendis natus nam asperiores! Dignissimos, iusto. Quisquam, adipisci. Repellendus unde quod perspiciatis, possimus ipsum quasi nam?</p>
    </div>
  )
}
