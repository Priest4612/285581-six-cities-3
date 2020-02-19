import React from 'react';
import PropTypes from 'prop-types';

import OfferCard from '../offer-card/offer-card.jsx';

const onOfferCardMouseEnter = () => {};

const OffersList = (props) => {
  const {offers, handleRentalHeaderClick} = props;

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <OfferCard
        key={offer.id}
        offer={offer}
        handleRentalHeaderClick={handleRentalHeaderClick}
        onOfferCardMouseEnter={onOfferCardMouseEnter}
      />)}
    </div>
  );
};


OffersList.propTypes = {
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

export default OffersList;
