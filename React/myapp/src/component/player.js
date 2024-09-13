import React from 'react'
import Cricket from './cricket'
import Football from './football'
import styles from './player.module.css'

export default function player() {
    const cric = [
        {cPlayer: "Virat", country: "India"},
        {cPlayer: "Hardik", country: "India"},
        {cPlayer: "Sachin", country: "India"}
    ]
    const foot = [
        {fPlayer: "Ronaldo", country: "Brazil"},
        {fPlayer: "Messi", country: "Poland"},
        {fPlayer: "Messi", country: "Poland"}
    ]
  return (
    <div className={styles.player}>
        <h2>Players</h2>
        <Cricket cric = {cric} />
        <Football foot = {foot} />
    </div>
  )
}
