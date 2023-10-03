"use client";
import { useRef } from 'react';

import Image from "next/image"
import Link from "next/link"
import logoImg from '../../../images/logo/logo-f.png'
import styles from './Nav.module.css'

// Importing Icons 
import { FaBars, FaTimes } from 'react-icons/fa'
export default function NavBar() {
  const navRef = useRef()
  const showNavbar = () => {
    navRef.current.classList.toggle(styles.responsiveNav)
    console.log(navRef)
  }
  return (
    <>
      <div className={styles.navContainer}>
        <Link href={'/'} className={styles.section0}>
          <Image
            src={logoImg}
            alt="13"
            priority
            className={styles.navImg}
          />
          <h1>Brand Name</h1>
        </Link>
        <nav className={styles.nav} ref={navRef}>
          <Link href={'https://www.facebook.com/themisfitofnightraid'} className={styles.navCTA}>
          <strong>Message</strong>
          </Link>
          <button className={`${styles.navBtns} ${styles.navCloseBtns}`} onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className={styles.navBtns} onClick={showNavbar}>
          <FaBars />
        </button>
      </div>
    </>
  )
}
