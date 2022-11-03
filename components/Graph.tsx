import type { NextPage } from 'next';
import type { GenreGraphData } from 'types';
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
const Graph: NextPage<GraphProps> = (props: GraphProps) => {
  const { genre } = props;
  const data = {
    datasets: [
      {
        label: 'graph data',
        data: genre,
        borderColor: 'rgb(255, 99, 132)',
        // yAxisID: 'yAxis',
      }
    ],
  };

  const options: any = {
    responsive: true,
    plugins: {
      legend: false,
      title: {
        display: false,
        text: 'Popularity of x over time',
      },
    },
    scales: {
      y: {
        title: {
          display: true,
          text: 'Number of Hits'
          // text: '# of Hits In Weekly Top 200 Per Year'
        }
      }
    }
  };

  return (
    <Line options={options} data={data} />
  )
}

export default Graph;
