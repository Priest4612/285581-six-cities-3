import React from 'react';
import renderer from 'react-test-renderer';

import ReviewsList from './reviews-list.jsx';


const reviews = [{
  id: 3,
  authorAvatar: `angelina`,
  authorName: `Angelina`,
  rating: 2.8,
  description: `123 3rfg432 54t4566 56457 5436er5 6456`,
  dateTime: `25-02-2020`,
  idOffer: 101,
}, {
  id: 4,
  authorAvatar: `max`,
  authorName: `Max`,
  rating: 4.8,
  description: `123 3rfg432 54t4566 56457 5436er5 6456`,
  dateTime: `27-02-2020`,
  idOffer: 101,
}, {
  id: 5,
  authorAvatar: `angelina`,
  authorName: `Angelina`,
  rating: 3.8,
  description: `123 3rfg432 54t4566 56457 5436er5 6456`,
  dateTime: `23-02-2020`,
  idOffer: 202,
}];

describe(`Checked OfferDetails`, () => {
  it(`Render OfferDetails`, () => {
    const tree = renderer
      .create(<ReviewsList
        reviews={reviews}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
