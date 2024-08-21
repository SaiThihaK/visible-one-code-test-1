import { FC } from "react";
import styles from "./home.module.css";
import LandingSection from "./landing-section";
import NewsSection from "./news-section";

import TrendingSection from "./trending-section";
const HomeContainer: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.landingWrapper}>
        <div className={styles.landing}>
          <LandingSection />
        </div>
        <div className={styles.news}>
          <NewsSection />
        </div>
      </div>
      <TrendingSection />
    </div>
  );
};

export default HomeContainer;
