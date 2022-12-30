import Head from "next/head";
import { useState, useEffect } from "react";
import Articlelist from "../components/ArticleList";
export interface Article {
  userId: number;
  id: number;
  title: string;
  body: string;
}
interface HomeProps {
  articles?: Article[];
}
export default function Home({ articles }: HomeProps) {
  // GETTING DATA FROM
  // const [articles, setArticles] = useState<Article[]>([]);
  // const fetchArticles = async () => {
  //   const response = await fetch("api/articles");
  //   const data = await response.json();
  //   setArticles(data);
  //   console.log(data);
  // };

  // USING NORMAL REACT WAY OF FETCHING DATA
  // const fetchArticles = async () => {
  //   try {
  //     const res = await fetch(
  //       `https://jsonplaceholder.typicode.com/posts?_limit=6`
  //     );
  //     const articles = await res.json();
  //     console.log(articles);
  //     setArticles(articles);
  //   } catch (err) {
  //     alert("errro fetching data: ");
  //   }
  // };
  // useEffect(() => {
  //   fetchArticles();
  // }, []);
  return (
    <div>
      {/* <Head>
        <title></title>
        <meta name="keywords" content="web development, programming" />
      </Head> */}
      {articles && <Articlelist articles={articles} />}
    </div>
  );
}

export const getStaticProps = async () => {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=6`
    );
    const articles = await res.json();
    // console.log(articles);

    return {
      props: {
        articles,
      },
    };
  } catch (err) {
    alert("errro fetching data: ");
  }
};
