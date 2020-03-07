import React from 'react';
import PropTypes from 'prop-types';

import NearPlaceItem from '../near-place-item/near-place-item.jsx';


const NearPlacesList = (props) => {
  const {places} = props;

  return (
    <React.Fragment>
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {places.map((place, i) =>
          <NearPlaceItem
            key={`place-${i}`}
            place={place}
          />
        )}
      </div>
    </React.Fragment>
  );
};


NearPlacesList.propTypes = {
  places: PropTypes.array.isRequired,
};


export default NearPlacesList;
