import type { NextApiRequest, NextApiResponse } from 'next'
import genreData from '../../../data/genrePopularities.json';

type GenreData = {
  x: string,
  y: number,
}[];
type GenreDataKey = keyof typeof genreData;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<GenreData>
) {

  const { genre } = req.query;
  const graphData = genreData[genre as GenreDataKey]

  res.status(200).json(graphData);
}
