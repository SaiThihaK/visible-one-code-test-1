import Title from "@/components/ui/title";
import { ArticleType } from "@/types/news.type";
import { FC } from "react";
import Article from "./article";
import styles from "./news-section.module.css";
const articleData: ArticleType[] = [
  {
    id: 1,
    category: "Travel",
    title: "Article Title",
    description:
      "desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum...",
    createdTime: "2 mins ago",
    image: "/image/trending1.jpg",
  },
  {
    id: 2,
    category: "Technology",
    title: "Article Title",
    description:
      "desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum...",
    createdTime: "2 mins ago",
    image: "/image/trending2.jpg",
  },
];
const NewsSection: FC = () => {
  return (
    <div className={styles.container}>
      <Title title="MORE NEWS" />
      <div className={styles.separator} />
      <div className={styles.newsWrapper}>
        {articleData.map((el) => (
          <Article key={el.id} data={el} />
        ))}
      </div>
    </div>
  );
};

export default NewsSection;
