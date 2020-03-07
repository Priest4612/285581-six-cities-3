import React from 'react';
import renderer from 'react-test-renderer';

import ReviewItem from './review-item.jsx';


const review = {
  id: 2,
  authorAvatar: `angelina`,
  authorName: `Angelina`,
  rating: 3.8,
  description: `123 3rfg432 54t4566 56457 5436er5 6456`,
  dateTime: `23-02-2020`,
  idOffer: 101,
};


describe(`Checked OfferDetails`, () => {
  it(`Render OfferDetails`, () => {
    const tree = renderer
      .create(<ReviewItem
        review={review}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
