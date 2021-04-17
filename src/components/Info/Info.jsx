import React from 'react';
import PropTypes from 'prop-types';

const Info = ({ dimensions, grubs, dens }) => {


  return (
    <div className="col m6 s12">
      <div className="card">
        <div className="card-content">
          <span className="card-title" data-test="bmi">
            Hatchery Kit Density: {dens}
          </span>
          <div className="card-data">
            <span data-test="weight">Kit Dimensions: {dimensions} kg</span>
            <span data-test="height">Number of Grubs: {grubs}</span>
          </div>

        </div>
      </div>
    </div>
  );
};

Info.propTypes = {
  id: PropTypes.string,
  dimensions: PropTypes.string,
  grubs: PropTypes.string ,
  dens: PropTypes.string,
};

export default Info;
