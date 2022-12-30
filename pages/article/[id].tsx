import {
  GetServerSideProps,
  GetStaticPaths,
  InferGetServerSidePropsType,
} from "next";

import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { Article } from "..";
import Meta from "../../components/Meta";
const ArticlePage = ({
  article,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  //   const router = useRouter();
  //   const { id } = router.query;
  return (
    <>
      <Meta title={article.title} description={article.body} />
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <Link href="/">Go Back</Link>
    </>
  );
};

export default ArticlePage;

export const getServerSideProps: GetServerSideProps<{
  article: Article;
}> = async (context) => {
  if (!context || !context.params) {
    return {
      notFound: true,
    };
  }
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );
  const article: Article = await res.json();

  return {
    props: {
      article,
    },
  };
};

export const getStaticPath = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const articles = await res.json();
  const ids = articles.map((article: Article) => article.id);
  const paths = ids.map((id: number) => ({ params: { id: id.toString() } }));
  return {
    paths,
    fallBack: false,
  };
};
