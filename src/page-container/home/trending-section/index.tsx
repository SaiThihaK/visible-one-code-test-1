import Title from "@/components/ui/title";
import { ArticleType } from "@/types/news.type";
import { FC } from "react";
import styles from "./trending-section.module.css";

const ArticleData: ArticleType[] = [
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
  {
    id: 3,
    category: "Technology",
    title: "Article Title",
    description:
      "desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum...",
    createdTime: "2 mins ago",
    image: "/image/trending13.jpg",
  },
];

const TrendingSection: FC = () => {
  return (
    <div className={styles.container}>
      <Title title="Trending" />
    </div>
  );
};

export default TrendingSection;
