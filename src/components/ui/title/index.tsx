import { ChevronLeft, ChevronRight } from "lucide-react";
import { FC } from "react";
import styles from "./title.module.css";
type Props = {
  title: string;
};

const Title: FC<Props> = ({ title }) => {
  return (
    <div className={styles.titleWrapper}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.iconWrapper}>
        <ChevronLeft />
        <ChevronRight className={styles.active} />
      </div>
    </div>
  );
};

export default Title;
