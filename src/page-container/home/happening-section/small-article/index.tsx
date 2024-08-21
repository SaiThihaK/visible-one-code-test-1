import { Clock } from "lucide-react";
import Image from "next/image";
import { FC } from "react";
import styles from "./small-article.module.css";

const SmallArticle: FC = () => {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.imageWrapper}>
        <Image
          fill
          src={"/image/trending1.jpg"}
          alt="image"
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className={styles.description}>
        <h4>Small Title</h4>
        <div className={styles.dateWrapper}>
          <Clock />
          2m ago<span>by days</span>
        </div>
      </div>
    </div>
  );
};

export default SmallArticle;
