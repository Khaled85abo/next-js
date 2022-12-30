import Link from "next/link";
import { Article } from "../pages";
import styles from "../styles/articleStyles.module.css";
type ArticleItemProps = {
  article: Article;
};
const ArticleItem = ({ article }: ArticleItemProps) => {
  return (
    <Link href="/article/[id]" as={`/article/${article.id}`}>
      <a className={styles.card}>
        <h5>{article.title}</h5>
        <p>{article.body}</p>
      </a>
    </Link>
  );
};

export default ArticleItem;
