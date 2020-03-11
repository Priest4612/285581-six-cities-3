import React from 'react';
import PropTypes from 'prop-types';

import OffersList from '../offers-list/offers-list.jsx';


const NearPlacesList = (props) => {
  const {offers, handleRentalHeaderClick} = props;
  const CLS_NAME = `near`;

  return (
    <React.Fragment>
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        <OffersList
          clsName={CLS_NAME}
          offers={offers}
          handleRentalHeaderClick={handleRentalHeaderClick}
        />
      </div>
    </React.Fragment>
  );
};


NearPlacesList.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        isPremium: PropTypes.bool.isRequired,
        picture: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        isBookmark: PropTypes.bool.isRequired,
        rating: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
      })
  ).isRequired,
  handleRentalHeaderClick: PropTypes.func.isRequired,
};


export default NearPlacesList;
