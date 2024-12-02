import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import AdminPage from '../pages/AdminPage/AdminPage';
import MovieDetailPage from '../pages/MovieDetail/MovieDetailPage';

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/movie/:id" element={<MovieDetailPage />} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
