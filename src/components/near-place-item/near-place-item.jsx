import React from 'react';
import PropTypes from 'prop-types';


const NearPlaceItem = (props) => {
  const {place} = props;
  const {
    price,
    isBookmark,
    rating,
    name,
    type,
    picture,
  } = place;

  return (
    <article className="near-places__card place-card">
      <div className="near-places__image-wrapper place-card__image-wrapper">
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
          <button className={`place-card__bookmark-button place-card__bookmark-button${isBookmark ? `--active` : ``} button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">{isBookmark
              ? `In bookmarks`
              : `To bookmarks`
            }</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: (rating * 100 / 5) + `%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{name}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};


NearPlaceItem.propTypes = {
  place: PropTypes.shape({
    price: PropTypes.number.isRequired,
    isBookmark: PropTypes.bool.isRequired,
    rating: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
  }).isRequired,
};


export default NearPlaceItem;
