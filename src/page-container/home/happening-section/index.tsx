import Title from "@/components/ui/title";
import HappeningCard from "./happening-card";
import styles from "./happening-section.module.css";
import SmallArticle from "./small-article";
const HappeningSection = () => {
  return (
    <div>
      <Title title="HAPPENING NOW" />
      <div className={styles.wrapper}>
        <div className={styles.landing}>
          <HappeningCard />
          <HappeningCard />
        </div>
        <div className={styles.news}>
          <SmallArticle />
          <SmallArticle />
          <SmallArticle />
        </div>
      </div>
    </div>
  );
};

export default HappeningSection;
