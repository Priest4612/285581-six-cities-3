import React from 'react';
import renderer from 'react-test-renderer';

import OffersList from './offers-list.jsx';

const offers = [
  {
    id: 101,
    isPremium: true,
    picture: `apartment.jpg`,
    price: 129,
    isBookmark: false,
    rating: 4,
    name: `apartment`,
    type: `Apartment`,
  }, {

    id: 202,
    isPremium: false,
    picture: `room.jpg`,
    price: 88,
    isBookmark: true,
    rating: 3,
    name: `room`,
    type: `Private room`,
  }, {

    id: 311,
    isPremium: false,
    picture: `apartment-03.jpg`,
    price: 218,
    isBookmark: false,
    rating: 5,
    name: `apartment-13`,
    type: `Apartment`,
  }, {

    id: 400,
    isPremium: false,
    picture: `apartment-02.jpg`,
    price: 132,
    isBookmark: true,
    rating: 3.8,
    name: `apartment-02`,
    type: `Apartment`,
  }
];

describe(`Checked OffersList`, () => {
  it(`Render OffersList`, () => {
    const tree = renderer
      .create(<OffersList
        offers={offers}
        handleRentalHeaderClick={() => {}}
        onOfferMouseEnter={() => {}}
        onOfferMouseLeave={() => {}}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
