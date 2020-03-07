import React from 'react';
import PropTypes from 'prop-types';

import ReviewItem from '../review-item/review-item.jsx';

const ReviewsList = (props) => {
  const {reviews} = props;

  return (
    <React.Fragment>
      <h2 className="reviews__title">Reviews &middot;
        <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {reviews.map((review, i) =>
          <ReviewItem
            key={`review-${i}`}
            review={review}
          />
        )}
      </ul>
    </React.Fragment>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.array.isRequired,
};


export default ReviewsList;
