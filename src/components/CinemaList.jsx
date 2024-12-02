import React from 'react';

const CinemaList = ({ cinemas, onCinemaClick }) => {
  return (
    <div>
      <h4>Cinemas</h4>
      <div className="card">
        <ul className="list-group list-group-flush">
          {cinemas.map((cinema) => (
            <li
              key={cinema.maHeThongRap}
              className="list-group-item d-flex align-items-center"
              style={{ cursor: 'pointer' }}
              onClick={() => onCinemaClick(cinema.maHeThongRap)}
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
    </div>
  );
};

export default CinemaList;
