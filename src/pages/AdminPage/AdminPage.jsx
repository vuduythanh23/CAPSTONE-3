import React, { useEffect, useState } from 'react';
import axiosClient from '../../api/axiosClient';

const AdminPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axiosClient.get('/QuanLyPhim/LayDanhSachPhim?maNhom=GP01');
        setMovies(response.data.content);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };
    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Admin - Manage Movies</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {movies.map(movie => (
            <tr key={movie.maPhim}>
              <td>{movie.maPhim}</td>
              <td>{movie.tenPhim}</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPage;
