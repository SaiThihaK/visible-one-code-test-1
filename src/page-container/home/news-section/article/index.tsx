import { ArticleType } from "@/types/news.type";
import { Clock } from "lucide-react";
import { FC } from "react";
import styles from "./article.module.css";
type Props = {
  data: ArticleType;
};
const Article: FC<Props> = ({ data }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.category}>{data.category}</div>
      <div className={styles.title}>{data.title}</div>
      <div className={styles.description}>{data.description}</div>
      <div className={styles.dateWrapper}>
        <Clock />
        {data.createdTime}
      </div>
    </div>
  );
};

export default Article;
