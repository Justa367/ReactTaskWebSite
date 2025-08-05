import { createContext, useContext, useState, type ReactNode } from 'react';

type ChartImageContextType = {
  image: string | null;
  setImage: (image: string) => void;
};

const ChartImageContext = createContext<ChartImageContextType | undefined>(undefined);

export const ChartImageProvider = ({ children }: { children: ReactNode }) => {
  const [image, setImage] = useState<string | null>(null);

  return (
    <ChartImageContext.Provider value={{ image, setImage }}>{children}</ChartImageContext.Provider>
  );
};

export const useChartImage = (): ChartImageContextType => {
  const context = useContext(ChartImageContext);
  if (!context) {
    throw new Error('Error');
  }
  return context;
};
