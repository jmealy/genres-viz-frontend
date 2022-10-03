import type { NextPage } from 'next';
import type { GenreGraphData } from 'types';

const Graph: NextPage<GenreGraphData> = (props: any) => {
  const { genre } = props;

  return (
    <p>{genre}</p>
  )
}

export default Graph
