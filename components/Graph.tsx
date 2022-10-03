import type { NextPage } from 'next';
import type { GenreGraphData } from 'types';

interface GraphProps {
  genre: GenreGraphData | null
}
const Graph: NextPage<GraphProps> = (props: any) => {
  const { genre } = props;

  return (
    <p>{JSON.stringify(genre)}</p>
  )
}

export default Graph;
