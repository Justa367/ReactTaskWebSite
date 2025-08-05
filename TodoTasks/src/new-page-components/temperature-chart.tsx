import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import type { TemperatureRowType } from '../types/temperature';
import { useRef } from 'react';
import { toJpeg } from 'html-to-image';
import { Button, Stack, Typography } from '@mui/material';
import { useChartImage } from '../chat-img-context/chat-img-context';

type TemperatureChartProps = {
  japanData: TemperatureRowType[];
  canadaData: TemperatureRowType[];
  germanyData: TemperatureRowType[];
};

export const TemperatureChart = ({ japanData, canadaData, germanyData }: TemperatureChartProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { image, setImage } = useChartImage();
  const handleExport = () => {
    if (ref.current === null) return;
    requestAnimationFrame(() => {
      toJpeg(ref.current!, {
        skipFonts: true,
        quality: 1,
        skipAutoScale: true,
        backgroundColor: '#FFFFFF',
      }).then((dataUrl) => {
        setImage(dataUrl);
      });
    });
  };

  const formatData = (data: TemperatureRowType[]) =>
    data.map((row) => ({ ...row, timeStr: row.time.format('DD.MM HH:mm') }));

  return (
    <>
      <Button variant="contained" onClick={handleExport}>
        Export chart to jpg
      </Button>

      <div ref={ref} style={{ width: '100%', height: 500 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
            <XAxis dataKey="timeStr" />
            <YAxis domain={['auto', 'auto']} />
            <CartesianGrid stroke="#eee" strokeDasharray="4 1 2" />
            <Tooltip />
            <Line
              type="monotone"
              data={formatData(japanData)}
              dataKey="temperature"
              name="Japan"
              stroke="#8884d8"
              dot={false}
              xAxisId={0}
              yAxisId={0}
              isAnimationActive={false}
            />
            <Line
              type="monotone"
              data={formatData(canadaData)}
              dataKey="temperature"
              name="Canada"
              stroke="#82ca9d"
              dot={false}
              xAxisId={1}
              yAxisId={0}
              isAnimationActive={false}
            />
            <Line
              type="monotone"
              data={formatData(germanyData)}
              dataKey="temperature"
              name="Germany"
              stroke="#ff7300"
              dot={false}
              xAxisId={2}
              yAxisId={0}
              isAnimationActive={false}
            />
            <Legend verticalAlign="top" align="center" wrapperStyle={{ fontSize: 15 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {image && (
        <Stack mt={5}>
          <Typography>Exported jpg</Typography>
          <img src={image} alt="Exported jpg" style={{ maxWidth: '100%', border: '1px solid' }} />
        </Stack>
      )}
    </>
  );
};
