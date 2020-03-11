import React from 'react';
import renderer from 'react-test-renderer';

import OfferDetails from '../offer-details/offer-details.jsx';

const activeOfferId = 212;
const offers = [{
  id: 212,
  isPremium: false,
  picture: `room-01.jpg`,
  price: 188,
  isBookmark: true,
  rating: 5,
  name: `Wood and stone place`,
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
                but where the bustle of the city comes to rest in this alley flowery and colorful.`
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
  hostStatus: ``,
  description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.
                An independent House, strategically located between Rembrand Square and National Opera,
                but where the bustle of the city comes to rest in this alley flowery and colorful.`,
  coordinates: [52.3809553943508, 4.939309666406198],
}];

describe(`Checked OfferDetails`, () => {
  it(`Render OfferDetails`, () => {
    const tree = renderer
      .create(<OfferDetails
        activeOfferId={activeOfferId}
        offers={offers}
        handleRentalHeaderClick={() => {}}
      />, {
        createNodeMock: () => document.createElement(`div`)
      })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
