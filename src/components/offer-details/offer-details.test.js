import React from 'react';
import renderer from 'react-test-renderer';

import OfferDetails from '../offer-details/offer-details.jsx';


const offer = {
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
};

describe(`Checked OfferDetails`, () => {
  it(`Render OfferDetails`, () => {
    const tree = renderer
      .create(<OfferDetails
        offer={offer}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
