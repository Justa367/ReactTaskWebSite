import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import type { TemperatureRowType } from '../types/temperature';

type TemperatureBarChartProps = {
  canadaData: TemperatureRowType[];
};

type TemperatureStats = {
  max: number;
  min: number;
};

export const TemperatureBarChart = ({ canadaData }: TemperatureBarChartProps) => {
  if (!canadaData || canadaData.length === 0) return <div>No data</div>;

  const groupedByDay: { [day: string]: TemperatureStats } = {};

  canadaData.forEach(({ time, temperature }) => {
    const day = time.format('DD.MM');

    if (!groupedByDay[day]) {
      groupedByDay[day] = { max: temperature, min: temperature };
    } else {
      if (temperature > groupedByDay[day].max) groupedByDay[day].max = temperature;
      if (temperature < groupedByDay[day].min) groupedByDay[day].min = temperature;
    }
  });

  const chartData: { day: string; Max: number; Min: number }[] = [];
  for (const day in groupedByDay) {
    if (groupedByDay.hasOwnProperty(day)) {
      chartData.push({
        day: day,
        Max: groupedByDay[day].max,
        Min: groupedByDay[day].min,
      });
    }
  }

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 40 }} barGap={10}>
        <CartesianGrid stroke="#eee" strokeDasharray="4 1 2" />
        <XAxis dataKey="day" angle={-45} textAnchor="end" interval={0} />
        <YAxis unit="°C" />
        <Tooltip />
        <Legend verticalAlign="top" height={36} />
        <Bar dataKey="Max" fill="#ff7300" radius={[4, 4, 0, 0]} />
        <Bar dataKey="Min" fill="#387908" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
};
