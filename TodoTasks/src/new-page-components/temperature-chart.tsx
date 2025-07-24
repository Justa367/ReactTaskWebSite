import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import type { TemperatureRowType } from '../types/temperature';

type TemperatureChartProps = {
  data: TemperatureRowType[];
};

export const TemperatureChart = ({ data }: TemperatureChartProps) => {
  const chartData = data.map((row) => ({
    ...row,
    time: row.time.format('DD.MM HH:mm'),
  }));

  return (
    <ResponsiveContainer width="100%" height={500}>
      <LineChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
        <XAxis dataKey="time" />
        <YAxis />
        <CartesianGrid stroke="#eee" strokeDasharray="4 1 2" />
        <Line type="monotone" dataKey="temperature" stroke="#8884d8" />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
};
