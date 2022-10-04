import type { NextPage } from 'next';
import type { GenreGraphData } from 'types';
import moment from 'moment';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  TimeScale,
  Title,
  Tooltip,
  Legend,
);

interface GraphProps {
  genre: GenreGraphData | null
}
const Graph: NextPage<GraphProps> = (props: any) => {
  const { genre } = props;
  const data = {
    datasets: [
      {
        label: 'graph data',
        data: genre,
        borderColor: 'rgb(255, 99, 132)',
      }
    ],
  };

  const options: any = {
    responsive: true,
    plugins: {
      legend: false,
      title: {
        display: true,
        text: 'Popularity of x over time',
      },
    },
  };


  return (
    <Line options={options} data={data} />
  )
}

export default Graph;
