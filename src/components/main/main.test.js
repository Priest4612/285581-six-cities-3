import React from 'react';
import renderer from 'react-test-renderer';
import Main from '../main/main.jsx';

const offers = [
  {
    id: 131,
    isPremium: true,
    picture: `apartment-01.jpg`,
    price: 129,
    isBookmark: false,
    rating: 4,
    name: `apartment-01`,
    type: `Apartment`,
  }, {

    id: 232,
    isPremium: false,
    picture: `room.jpg`,
    price: 88,
    isBookmark: true,
    rating: 3,
    name: `room`,
    type: `Private room`,
  }, {

    id: 343,
    isPremium: false,
    picture: `apartment-03.jpg`,
    price: 218,
    isBookmark: false,
    rating: 5,
    name: `apartment-03`,
    type: `Apartment`,
  }
];

describe(`Render Main`, () => {
  it(`Main render`, () => {
    const tree = renderer
      .create(<Main
        offers={offers}
        handleRentalHeaderClick={() => {}}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
