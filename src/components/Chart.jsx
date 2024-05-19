import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Bar, Doughnut } from "react-chartjs-2";
import { useUser } from "../UserContext";

// Register the components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

export const TransactionCharts = () => {
  const { chartData, calcChartData } = useUser();
  return (
    <div>
      <Bar data={chartData} options={calcChartData} />
      <Doughnut data={chartData} options={calcChartData} />
    </div>
  );
};
