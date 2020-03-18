import React from 'react';
import PropTypes from 'prop-types';

import CityItem from '../city-item/city-item.jsx';

const CitiesList = (props) => {
  const {cities} = props;

  return (
    <ul className="locations__list tabs__list">
      {cities.map((city, i) =>
        <CityItem
          key={`city-${i}`}
          city={city}
        />
      )}
    </ul>
  );
};


CitiesList.propTypes = {
  cities: PropTypes.array.isRequired,
};


export default CitiesList;
