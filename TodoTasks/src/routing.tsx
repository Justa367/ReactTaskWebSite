import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home-page.tsx';
import { NewPage } from './pages/new-page.tsx';
import Layout from './layout.tsx';
import { NotFound } from './pages/not-found.tsx';

export const Routing = () => {
  //TODO: obsłużyć strone NOT FOUND jesli uzytkownik wejdzie na podstrone ktora nie istnieje
  //TODO: napis 404 not found i przycisk do powrotu na home page
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index path="/" element={<HomePage />} />
        <Route path="/new-page" element={<NewPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
