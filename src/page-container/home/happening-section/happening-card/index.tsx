import { Clock } from "lucide-react";
import { FC } from "react";
import styles from "./happening-card.module.css";
const HappeningCard: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.description}>
          <h2>Amazing places in America to visit</h2>
          <p>
            For some reason - this country this neightborthood this particular
            street- is the place you are living a majority of your life in
          </p>
          <div className={styles.dateWrapper}>
            <Clock />
            2m ago
          </div>
        </div>
      </div>
    </div>
  );
};

export default HappeningCard;
