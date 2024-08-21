import Image from "next/image";
import styles from "./navbar.module.css";
const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>LOGO</div>
      <div className={styles.navlist}>
        <span className={styles.active}>HOME</span>
        <span>DISCOVERY</span>
        <span>PHOTO</span>
        <span>CONTACT</span>
      </div>
      <Image
        className={styles.avatar}
        src={"/image/profile.jpg"}
        width={30}
        height={30}
        alt="avatar"
      />
    </div>
  );
};

export default Navbar;
