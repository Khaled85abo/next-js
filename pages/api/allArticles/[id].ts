import { NextApiRequest, NextApiResponse } from "next";
import { articles } from "../../../data";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;
  const article = articles.find((article) => article.id === id);
  if (article) {
    res.status(200).json(article);
  } else {
    res.status(404).json({ message: `Article with id of ${id} is not found` });
  }
}
