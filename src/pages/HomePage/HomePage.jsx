import React, { useEffect, useState } from 'react';
import axiosClient from '../../api/axiosClient';
import './HomePage.css';
import NowShowing from '../../components/NowShowing';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const HomePage = () => {
  const [banners, setBanners] = useState([]);
  const [cinemas, setCinemas] = useState([]);
  const [schedule, setSchedule] = useState([]);
  const [selectedCinema, setSelectedCinema] = useState(null);
  const [selectedBranch, setSelectedBranch] = useState(null);

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const response = await axiosClient.get('/QuanLyPhim/LayDanhSachBanner');
        setBanners(response.data.content);
      } catch (error) {
        console.error('Error fetching banners:', error);
      }
    };

    const fetchCinemas = async () => {
      try {
        const response = await axiosClient.get('/QuanLyRap/LayThongTinHeThongRap');
        setCinemas(response.data.content);
      } catch (error) {
        console.error('Error fetching cinemas:', error);
      }
    };

    const fetchSchedule = async () => {
      try {
        const response = await axiosClient.get('/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01');
        setSchedule(response.data.content);
      } catch (error) {
        console.error('Error fetching schedule:', error);
      }
    };

    fetchBanners();
    fetchCinemas();
    fetchSchedule();
  }, []);

  const handleCinemaClick = (cinemaId) => {
    setSelectedCinema(cinemaId);
    setSelectedBranch(null); // Reset branch khi chọn rạp mới
  };

  const handleBranchClick = (branchId) => {
    setSelectedBranch(branchId);
  };

  const renderSchedule = () => {
    if (!selectedCinema) {
      return <div>Please select a cinema to view the branches.</div>;
    }

    const cinemaSchedule = schedule.find((cinema) => cinema.maHeThongRap === selectedCinema);

    if (!cinemaSchedule) {
      return <div>No schedule available for this cinema.</div>;
    }

    if (!selectedBranch) {
      return (
        <div>
          <h5>Please select a branch to view the schedule:</h5>
          <ul className="list-group">
            {cinemaSchedule.lstCumRap.map((branch) => (
              <li
                key={branch.maCumRap}
                className="list-group-item"
                style={{ cursor: 'pointer' }}
                onClick={() => handleBranchClick(branch.maCumRap)}
              >
                {branch.tenCumRap}
              </li>
            ))}
          </ul>
        </div>
      );
    }

    const branchSchedule = cinemaSchedule.lstCumRap.find((branch) => branch.maCumRap === selectedBranch);

    if (!branchSchedule) {
      return <div>No schedule available for this branch.</div>;
    }

    return (
      <div>
        <h5>{branchSchedule.tenCumRap}</h5>
        {branchSchedule.danhSachPhim.slice(0, 5).map((movie) => ( // Chỉ lấy 5 kết quả đầu tiên
          <div key={movie.maPhim} className="mb-3">
            <div className="card">
              <img
                src={movie.hinhAnh}
                className="card-img-top"
                alt={movie.tenPhim}
                style={{ height: '300px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">{movie.tenPhim}</h5>
                <p className="card-text">
                  {movie.lstLichChieuTheoPhim.map((scheduleItem, index) => (
                    <span
                      key={index}
                      className="badge bg-secondary mx-1"
                      style={{ display: 'inline-block', marginBottom: '5px' }}
                    >
                      {new Date(scheduleItem.ngayChieuGioChieu).toLocaleTimeString()}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
      <Header />

      <div className="container mt-4">
        {/* Banner Carousel */}
        <div id="bannerCarousel" className="carousel slide mb-4" data-bs-ride="carousel">
          <div className="carousel-inner">
            {banners.map((banner, index) => (
              <div
                key={banner.maBanner}
                className={`carousel-item ${index === 0 ? 'active' : ''}`}
                style={{ maxHeight: '600px' }}
              >
                <img
                  src={banner.hinhAnh}
                  className="d-block w-100"
                  alt={`Banner ${index}`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    objectPosition: 'center',
                  }}
                />
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#bannerCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#bannerCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
          </button>
        </div>

        {/* Now Showing Movies */}
        <NowShowing />

        {/* Cinemas and Schedule */}
        <div className="row mt-5">
          {/* Cinemas */}
          <div className="col-md-3">
            <h4>Cinemas</h4>
            <ul className="list-group">
              {cinemas.map((cinema) => (
                <li
                  key={cinema.maHeThongRap}
                  className="list-group-item d-flex align-items-center"
                  style={{ cursor: 'pointer' }}
                  onClick={() => handleCinemaClick(cinema.maHeThongRap)}
                >
                  <img
                    src={cinema.logo}
                    alt={cinema.tenHeThongRap}
                    style={{ width: '50px', height: '50px', objectFit: 'cover', marginRight: '10px' }}
                  />
                  <span>{cinema.tenHeThongRap}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Movie Schedule */}
          <div className="col-md-9">
            <h4>Movie Schedule</h4>
            {renderSchedule()}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
