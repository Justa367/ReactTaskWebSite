import type { PdfData } from '../types/pdf-data-type';

export const weatherPdfData: PdfData[] = [
  {
    city: 'Tokyo',
    region: 'Kanto',
    temperature: 12,
    humidity: 65,
    condition: 'Partly Cloudy',
    wind: 8,
  },
  {
    city: 'Osaka',
    region: 'Kansai',
    temperature: 14,
    humidity: 70,
    condition: 'Sunny',
    wind: 6,
  },
  {
    city: 'Kyoto',
    region: 'Kansai',
    temperature: 11,
    humidity: 68,
    condition: 'Overcast',
    wind: 5,
  },
  {
    city: 'Sapporo',
    region: 'Hokkaido',
    temperature: -2,
    humidity: 80,
    condition: 'Snow',
    wind: 12,
  },
  {
    city: 'Hiroshima',
    region: 'Chugoku',
    temperature: 13,
    humidity: 72,
    condition: 'Light Rain',
    wind: 8,
  },
  {
    city: 'Fukuoka',
    region: 'Kyushu',
    temperature: 16,
    humidity: 75,
    condition: 'Cloudy',
    wind: 9,
  },
];
