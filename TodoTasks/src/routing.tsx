import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home-page.tsx';
import { NewPage } from './pages/weather-page.tsx';
import Layout from './layout.tsx';
import { NotFound } from './pages/not-found.tsx';
import { PdfView } from './pages/pdf-viewer.tsx';
import { ChartImageProvider } from './chat-img-context/chat-img-context.tsx';

export const Routing = () => {
  return (
    <ChartImageProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<HomePage />} />
          <Route path="/weather-page" element={<NewPage />} />
          <Route path="/pdf-viewer" element={<PdfView />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </ChartImageProvider>
  );
};
