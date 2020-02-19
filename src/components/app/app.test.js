import React from 'react';
import renderer from 'react-test-renderer';
import App from '../app/app.jsx';

const offers = [
  {
    id: 101,
    isPremium: true,
    picture: `apartment-01.jpg`,
    price: 129,
    isBookmark: false,
    rating: 4,
    name: `apartment-01`,
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

    id: 333,
    isPremium: false,
    picture: `apartment-03.jpg`,
    price: 218,
    isBookmark: false,
    rating: 4.5,
    name: `apartment-03`,
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

describe(`Render App`, () => {
  it(`App place Count = 13`, () => {
    const tree = renderer
      .create(<App
        offers={offers}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
