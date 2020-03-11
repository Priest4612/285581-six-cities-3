import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import ReviewsList from '../reviews-list/reviews-list.jsx';
import reviews from '../../mock/reviews.js';
import NearPlacesList from '../near-places-list/near-places-list.jsx';
import Map from '../map/map.jsx';

class OfferDetails extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {activeOfferId, offers, handleRentalHeaderClick} = this.props;
    const nearPlaces = offers.filter((item) => item.id !== activeOfferId).slice(0, 3);
    const offer = offers.filter((item) => item.id === activeOfferId);

    const {
      id,
      isPremium,
      price,
      isBookmark,
      rating,
      name,
      type,
      gallery,
      bedroomsAmount,
      maxAdults,
      features,
      hostName,
      hostAvatar,
      hostStatus,
      description,
    } = offer[0];

    return (
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {this._renderGallery(gallery)}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">

              {isPremium && this._renderPremium()}

              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {name}
                </h1>
                <button className="property__bookmark-button button" type="button">
                  <svg className={isBookmark
                    ? `property__bookmark-icon--active`
                    : `property__bookmark-icon`
                  } width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">{isBookmark
                    ? `In bookmarks`
                    : `To bookmarks`
                  }</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: (rating * 100 / 5) + `%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedroomsAmount} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {this._renderFeatures(features)}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={`property__avatar-wrapper property__avatar-wrapper--${hostStatus} user__avatar-wrapper`}>
                    <img className="property__avatar user__avatar" src={hostAvatar} width="74" height="74" alt="Host avatar"/>
                  </div>
                  <span className="property__user-name">
                    {hostName}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">

                <ReviewsList
                  reviews={reviews.filter((review) => review.idOffer === id)}
                />

                <form className="reviews__form form" action="#" method="post">
                  <label className="reviews__label form__label" htmlFor="review">Your review</label>
                  <div className="reviews__rating-form form__rating">
                    <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio"/>
                    <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
                      <svg className="form__star-image" width="37" height="33">
                        <use xlinkHref="#icon-star"></use>
                      </svg>
                    </label>

                    <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio"/>
                    <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
                      <svg className="form__star-image" width="37" height="33">
                        <use xlinkHref="#icon-star"></use>
                      </svg>
                    </label>

                    <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio"/>
                    <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
                      <svg className="form__star-image" width="37" height="33">
                        <use xlinkHref="#icon-star"></use>
                      </svg>
                    </label>

                    <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio"/>
                    <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
                      <svg className="form__star-image" width="37" height="33">
                        <use xlinkHref="#icon-star"></use>
                      </svg>
                    </label>

                    <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio"/>
                    <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
                      <svg className="form__star-image" width="37" height="33">
                        <use xlinkHref="#icon-star"></use>
                      </svg>
                    </label>
                  </div>
                  <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
                  <div className="reviews__button-wrapper">
                    <p className="reviews__help">
                      To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
                    </p>
                    <button className="reviews__submit form__submit button" type="submit" disabled="">Submit</button>
                  </div>
                </form>
              </section>
            </div>
          </div>
          <section className="property__map map">
            <Map
              offerCords={nearPlaces}
            />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">

            <NearPlacesList
              offers={nearPlaces}
              handleRentalHeaderClick={handleRentalHeaderClick}
            />

          </section>
        </div>
      </main>
    );
  }

  _renderGallery(gallery) {
    return (
      gallery.map((img, i) => {
        return (
          <div key={`${i}${img}`} className="property__image-wrapper">
            <img className="property__image" src={`img/${img}`} alt="Photo studio"/>
          </div>
        );
      })
    );
  }

  _renderPremium() {
    return (
      <div className="property__mark">
        <span>Premium</span>
      </div>
    );
  }

  _renderFeatures(features) {
    return (
      features.map((feature, i) => {
        return (
          <li key={`${i}${feature}`} className="property__inside-item">
            {feature}
          </li>
        );
      })
    );
  }
}


OfferDetails.propTypes = {
  activeOfferId: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    isPremium: PropTypes.bool.isRequired,
    price: PropTypes.number.isRequired,
    isBookmark: PropTypes.bool.isRequired,
    rating: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    gallery: PropTypes.array.isRequired,
    bedroomsAmount: PropTypes.number.isRequired,
    maxAdults: PropTypes.number.isRequired,
    features: PropTypes.array.isRequired,
    hostName: PropTypes.string.isRequired,
    hostAvatar: PropTypes.string.isRequired,
    hostStatus: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })).isRequired,
  handleRentalHeaderClick: PropTypes.func.isRequired,
};

export default OfferDetails;
