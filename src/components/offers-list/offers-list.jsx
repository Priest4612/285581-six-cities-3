import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import OfferCard from '../offer-card/offer-card.jsx';


class OffersList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeOfferCardId: null,
    };

    this._setActiveOfferCard = this._setActiveOfferCard.bind(this);
    this._removeActiveOfferCard = this._removeActiveOfferCard.bind(this);
  }

  render() {
    const {clsName, offers, handleRentalHeaderClick} = this.props;

    return (
      <React.Fragment>
        {offers.map((offer, i) => <OfferCard
          key={`offer-${i}`}
          clsName={clsName}
          offer={offer}
          handleRentalHeaderClick={handleRentalHeaderClick}
          onOfferMouseEnter={this._setActiveOfferCard}
          onOfferMouseLeave={this._removeActiveOfferCard}
        />)}
      </React.Fragment>
    );
  }

  _setActiveOfferCard(offer) {
    this.setState({
      activeOfferCardId: offer.id,
    });
  }

  _removeActiveOfferCard() {
    this.setState({
      activeOfferCardId: null,
    });
  }
}


OffersList.propTypes = {
  clsName: PropTypes.string.isRequired,
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
