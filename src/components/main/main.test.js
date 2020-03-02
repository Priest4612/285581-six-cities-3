import React from 'react';
import renderer from 'react-test-renderer';

import Main from '../main/main.jsx';
/* import createMapBlock from '../map/create-map-block.js'; */

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

    gallery: [
      `apartment-11.jpg`,
      `apartment-02.jpg`,
      `apartment-33.jpg`,
      `room.jpg`,
      `studio-01.jpg`,
      `apartment-01.jpg`
    ],
    bedroomsAmount: 11,
    maxAdults: 10,
    features: [
      `Wi-Fi`,
      `Washing machine`,
      `Towels`,
      `Heating`,
      `Coffee machine`,
      `Baby seat`,
      `Kitchen`,
      `Dishwasher`,
      `Fridge`
    ],
    hostName: `Angelina`,
    hostAvatar: `img/avatar-angelina.jpg`,
    hostStatus: `pro`,
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.
                  The 18th century.
                  An independent House, strategically located between Rembrand Square and National Opera,
                  but where rest in this alley flowery and colorful.`,
    coordinates: [52.3909553943508, 4.85309666406198],
  }, {

    id: 202,
    isPremium: false,
    picture: `room.jpg`,
    price: 828,
    isBookmark: true,
    rating: 3,
    name: `Wood and stone place 222`,
    type: `Private room`,

    gallery: [
      `apartment-01.jpg`,
      `apartment-02.jpg`,
      `apartment-03.jpg`,
      `room.jpg`,
      `studio-01.jpg`,
      `apartment-01.jpg`
    ],
    bedroomsAmount: 3,
    maxAdults: 9,
    features: [
      `Wi-Fi`,
      `Heating`,
      `Coffee machine`,
      `Baby seat`,
      `Kitchen`,
      `Dishwasher`,
      `Cabel TV`,
      `Fridge`
    ],
    hostName: `Max`,
    hostAvatar: `img/avatar-max.jpg`,
    hostStatus: `pro`,
    description: `An independent House, strategically located between Rembrand Square and National Opera,
                  but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    coordinates: [52.3909553943508, 4.85309666406198],
  }, {

    id: 333,
    isPremium: false,
    picture: `apartment-03.jpg`,
    price: 218,
    isBookmark: false,
    rating: 4.5,
    name: `Nice, cozy, warm big bed apartment`,
    type: `Apartment`,

    gallery: [
      `apartment-02.jpg`,
      `apartment-01.jpg`,
      `room.jpg`,
      `apartment-03.jpg`,
      `apartment-01.jpg`,
      `studio-01.jpg`,
    ],
    bedroomsAmount: 2,
    maxAdults: 2,
    features: [
      `Wi-Fi`,
      `Washing machine`,
      `Towels`,
      `Heating`,
      `Coffee machine`,
      `Baby seat`,
      `Kitchen`,
      `Dishwasher`,
    ],
    hostName: `Angelina`,
    hostAvatar: `img/avatar-angelina.jpg`,
    hostStatus: `pro`,
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.
                  The building is green and from 18th century.`,
    coordinates: [52.3909553943508, 4.85309666406198],
  }, {
    id: 400,
    isPremium: false,
    picture: `apartment-02.jpg`,
    price: 132,
    isBookmark: true,
    rating: 3.8,
    name: `Canal View Prinsengracht`,
    type: `Apartment`,

    gallery: [
      `apartment-01.jpg`,
      `apartment-02.jpg`,
      `apartment-01.jpg`,
      `room.jpg`,
      `apartment-03.jpg`,
      `studio-01.jpg`,
    ],
    bedroomsAmount: 4,
    maxAdults: 6,
    features: [
      `Wi-Fi`,
      `Washing machine`,
      `Towels`,
      `Heating`,
      `Coffee machine`,
      `Dishwasher`,
      `Cabel TV`,
      `Fridge`
    ],
    hostName: `Max`,
    hostAvatar: `img/avatar-max.jpg`,
    hostStatus: `pro`,
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.
                  An independent House, strategically located between Rembrand Square and National Opera,
                  but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    coordinates: [52.369553943508, 4.85309666406198],
  }
];

describe(`Render Main`, () => {
  it(`Main render`, () => {
    /* createMapBlock(); */
    const tree = renderer
      .create(<Main
        offers={offers}
        handleRentalHeaderClick={() => {}}
      />, {
        createNodeMock: () => document.createElement(`div`)
      })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
