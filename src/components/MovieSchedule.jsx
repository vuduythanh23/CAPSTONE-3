import React, { useState } from 'react';

const MovieSchedule = ({ cinemas, schedule }) => {
  const [selectedCinema, setSelectedCinema] = useState(null);
  const [selectedBranch, setSelectedBranch] = useState(null);

  const handleCinemaClick = (cinemaId) => {
    setSelectedCinema(cinemaId);
    setSelectedBranch(null); // Reset chi nhánh khi chọn rạp mới
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
        {branchSchedule.danhSachPhim.map((movie) => (
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
    <div className="row mt-5">
      {/* Danh sách rạp */}
      <div className="col-md-4">
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

      {/* Lịch chiếu */}
      <div className="col-md-8">
        <h4>Movie Schedule</h4>
        {renderSchedule()}
      </div>
    </div>
  );
};

export default MovieSchedule;
