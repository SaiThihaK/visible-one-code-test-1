"use client";
import Image from "next/image";
import { useState } from "react";
import styles from "./navbar.module.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.container}>
      <div className={styles.logo}>LOGO</div>
      <div className={`${styles.navlist} ${isMenuOpen ? styles.showMenu : ""}`}>
        <span className={styles.active}>HOME</span>
        <span>DISCOVERY</span>
        <span>PHOTO</span>
        <span>CONTACT</span>
      </div>

      <div className={styles.avaMenu}>
        <Image
          className={styles.avatar}
          src={"/image/profile.jpg"}
          width={30}
          height={30}
          alt="avatar"
        />
        <div className={styles.hamburger} onClick={toggleMenu}>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </div>
      </div>

      <div
        className={`${styles.sidebar} ${isMenuOpen ? styles.sidebarOpen : ""}`}
      >
        <div className={styles.closeBtn} onClick={toggleMenu}>
          &times;
        </div>
        <div className={styles.sidebarLinks}>
          <span className={styles.active}>HOME</span>
          <span>DISCOVERY</span>
          <span>PHOTO</span>
          <span>CONTACT</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
