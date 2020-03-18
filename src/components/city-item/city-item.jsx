import React from 'react';
import PropTypes from 'prop-types';

const CityItem = (props) => {
  const {name} = props.city;

  return (
    <li className="locations__item">
      <a className="locations__item-link tabs__item" href="#">
        <span>{name}</span>
      </a>
    </li>
  );
};

CityItem.propTypes = {
  city: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    coordinates: PropTypes.array.isRequired,
  }).isRequired,
};

export default CityItem;
