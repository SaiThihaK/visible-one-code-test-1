import { Facebook, Globe, Instagram, Send, Twitter } from "lucide-react";
import { FC } from "react";
import styles from "./footer.module.css";
const Footer: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.title}>LOGO</div>
        <div className={styles.routeGroup}>
          <div className={styles.routelink}>
            <span>Home</span>
            <span>Discovery</span>
            <span>Photos</span>
            <span>Contact</span>
          </div>
          <div className={styles.routelink}>
            <span>About</span>
            <span>Help</span>
            <span>Terms</span>
            <span>Guidelines</span>
          </div>
          <div className={styles.routelink}>
            <span>Testimonials</span>
            <span>Adverties</span>
            <span>Integrations</span>
            <span>Careers</span>
          </div>
        </div>

        <div>
          <div className={styles.inputWrapper}>
            <input type="email" placeholder="Email" className={styles.input} />
            <button className={styles.button}>
              <Send style={{ color: "white" }} />
            </button>
          </div>
          <span>Lorem ipsum dolor sit amet consectetur</span>
        </div>

        <div className={styles.socialMedia}>
          <Instagram />
          <Twitter />
          <Facebook />
          <Globe />
        </div>
      </div>
    </div>
  );
};

export default Footer;
