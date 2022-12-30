import { Article } from "../pages";
import ArticleStyles from "../styles/ArticleStyles.module.css";
import ArticleItem from "./ArticleItem";
type ArticleListProps = {
  articles: Article[];
};

const Articlelist = ({ articles }: ArticleListProps) => {
  return (
    <div className={ArticleStyles.grid}>
      {articles.map((article: Article) => {
        return <ArticleItem article={article} />;
      })}
    </div>
  );
};
export default Articlelist;
