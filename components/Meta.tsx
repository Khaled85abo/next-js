import Head from "next/head";

interface MeatProps {
  title: string;
  keywords: string;
  description: string;
}
const Meta = ({ title, keywords, description }: MeatProps) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "Web dev news",
  keywords: "web development programming",
  description: "new about the news technologies in the world wide web",
};

export default Meta;
