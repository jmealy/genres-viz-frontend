import type { NextApiRequest, NextApiResponse } from 'next'
import genreData from '../../../data/genrePopularities.json';
import { GenreGraphData } from 'types';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<GenreGraphData>
) {

  const { genre } = req.query;
  const graphData = genreData[genre as keyof typeof genreData]

  res.status(200).json(graphData);
}
