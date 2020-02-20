import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';


class OfferCard extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {offer, handleRentalHeaderClick, onOfferMouseEnter, onOfferMouseLeave} = this.props;
    const {id, isPremium, picture, price, isBookmark, rating, name, type} = offer;

    return (
      <article className="cities__place-card place-card"
        onMouseLeave={onOfferMouseLeave}
        onMouseEnter={() => {
          onOfferMouseEnter(offer);
        }}
      >
        {isPremium ? <div className="place-card__mark"><span>Premium</span></div> : ``}
        <div className="cities__image-wrapper place-card__image-wrapper">
          <a href="#">
            <img className="place-card__image" src={`img/${picture}`} width="260" height="200" alt="Place image"/>
          </a>
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{price}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>

            {
              isBookmark ?
                <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
                  <svg className="place-card__bookmark-icon" width="18" height="19">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">In bookmarks</span>
                </button> :
                <button className="place-card__bookmark-button button" type="button">
                  <svg className="place-card__bookmark-icon" width="18" height="19">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
            }

          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{width: (rating * 100 / 5) + `%`}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            <a
              href="#"
              onClick={() => handleRentalHeaderClick(id)}
            >{name}</a>
          </h2>
          <p className="place-card__type">{type}</p>
        </div>
      </article>
    );
  }
}


OfferCard.propTypes = {
  offer: PropTypes.shape({
    id: PropTypes.number.isRequired,
    isPremium: PropTypes.bool.isRequired,
    picture: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    isBookmark: PropTypes.bool.isRequired,
    rating: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
  handleRentalHeaderClick: PropTypes.func.isRequired,
  onOfferMouseEnter: PropTypes.func.isRequired,
  onOfferMouseLeave: PropTypes.func.isRequired,
};

export default OfferCard;
