import { ArticleType } from "@/types/news.type";
import { Clock } from "lucide-react";
import Image from "next/image";
import { FC } from "react";
import styles from "./trending-card.module.css";
type Props = {
  data: ArticleType;
};

const TrendingCard: FC<Props> = ({ data }) => {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.imageWrapper}>
        <Image
          fill
          src={data.image as string}
          alt={data.title}
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className={styles.description}>
        <h4>{data.title}</h4>
        <p>{data.description}</p>
        <div className={styles.dateWrapper}>
          <Clock />
          {data.createdTime}
        </div>
      </div>
    </div>
  );
};

export default TrendingCard;
