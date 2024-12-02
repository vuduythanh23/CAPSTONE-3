import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosClient from '../../api/axiosClient';

const MovieDetailPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axiosClient.get(`/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`);
        setMovie(response.data.content);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };
    fetchMovieDetails();
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div>
      <h1>{movie.tenPhim}</h1>
      <img src={movie.hinhAnh} alt={movie.tenPhim} />
      <p>{movie.moTa}</p>
    </div>
  );
};

export default MovieDetailPage;
