import { FC } from "react";
import styles from "./landing-section.module.css";
const LandingSection: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>WORLD NEWS</h2>
        <div className={styles.separator} />
        <div className={styles.description}>
          <span>Amazing places in America to visit</span>
          <p>
            For some reason - this country this neightborthood this particular
            street- is the place you are living a majority of your life in
          </p>
        </div>
        <button className={styles.btn}>Learn More</button>
      </div>
    </div>
  );
};

export default LandingSection;
