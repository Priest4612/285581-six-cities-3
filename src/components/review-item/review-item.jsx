import React from 'react';
import PropTypes from 'prop-types';

const ReviewItem = (props) => {
  const {review} = props;
  const {/* id,  */rating, authorName, authorAvatar, description, dateTime} = review;

  if (!review) {
    return null;
  }

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={`img/avatar-${authorAvatar}.jpg`} width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">
          {authorName}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: (rating * 100 / 5) + `%`}}></span>
            <span className="visually-hidden">{rating}</span>
          </div>
        </div>
        <p className="reviews__text">
          {description}
        </p>
        <time className="reviews__time" dateTime={dateTime}>{dateTime}</time>
      </div>
    </li>
  );
};

ReviewItem.propTypes = {
  review: PropTypes.shape({
    /* id: PropTypes.number.isRequired, */
    authorAvatar: PropTypes.string.isRequired,
    authorName: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    dateTime: PropTypes.string.isRequired,
  }).isRequired,
};

export default ReviewItem;
