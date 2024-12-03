import React, { useEffect, useState } from 'react';
import axiosClient from '../api/axiosClient';

const NowShowing = () => {
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
      <h2 className="mb-4" style={{color: 'white'}}>Now Showing</h2>
      <div className="row">
        {movies.map((movie) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={movie.maPhim}>
            <div
              className="card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
                border: '1px solid #ddd',
                borderRadius: '8px',
                overflow: 'hidden',
              }}
            >
              <img
                src={movie.hinhAnh}
                className="card-img-top"
                alt={movie.tenPhim}
                style={{
                  width: '100%',
                  height: '450px', // Đảm bảo chiều cao cố định cho ảnh
                  objectFit: 'cover', // Cắt và căn giữa ảnh để lấp đầy
                }}
              />
              <div
                className="card-body"
                style={{
                  flexGrow: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <h5 className="card-title">{movie.tenPhim}</h5>
                {/* <p className="card-text">{movie.moTa.substring(0, 100)}...</p> */}
                <a
                  href={`/movie/${movie.maPhim}`}
                  className="btn btn-primary"
                  style={{
                    alignSelf: 'center',
                    marginTop: 'auto',
                  }}
                >
                  View Details
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NowShowing;
