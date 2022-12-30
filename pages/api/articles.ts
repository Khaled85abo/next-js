import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=6`
    );
    const articles = await response.json();
    res.status(200).json(articles);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
}
