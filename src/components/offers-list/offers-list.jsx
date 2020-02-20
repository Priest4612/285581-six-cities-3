import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import OfferCard from '../offer-card/offer-card.jsx';


class OffersList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeOfferCard: null,
    };

    this._setActiveOfferCard = this._setActiveOfferCard.bind(this);
    this._removeActiveOfferCard = this._removeActiveOfferCard.bind(this);
  }

  render() {
    const {offers, handleRentalHeaderClick} = this.props;

    return (
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer) => <OfferCard
          key={offer.id}
          offer={offer}
          handleRentalHeaderClick={handleRentalHeaderClick}
          onOfferMouseEnter={this._setActiveOfferCard}
          onOfferMouseLeave={this._removeActiveOfferCard}
        />)}
      </div>
    );
  }

  _setActiveOfferCard(offer) {
    this.setState({
      activeOfferCard: offer,
    });
  }

  _removeActiveOfferCard() {
    this.setState({
      activeOfferCard: null,
    });
  }
}


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
