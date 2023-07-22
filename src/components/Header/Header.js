import React from 'react'
import styles from './Header.module.css'

function Header() {
  return (
    <>
      <div className={styles.navbar}>
        {/* <img src='./img/project_images/nav.jpg'alt='nav'/> */}
        <h4>About</h4>
        <h4>Contacts</h4>
      </div>
    </>
  )
}

export default Header
