import React from 'react';
import renderer from 'react-test-renderer';

import OfferCard from './offer-card.jsx';

const offer = {
  id: 400,
  isPremium: false,
  picture: `apartment-02.jpg`,
  price: 132,
  isBookmark: true,
  rating: 3.8,
  name: `apartment-02`,
  type: `Apartment`,
};

const CLS_NAME = `cities`;

describe(`Checked OfferCard`, () => {
  it(`Render OfferCard`, () => {
    const tree = renderer
      .create(<OfferCard
        key={offer.id}
        clsName={CLS_NAME}
        offer={offer}
        handleRentalHeaderClick={() => {}}
        onOfferMouseEnter={() => {}}
        onOfferMouseLeave={() => {}}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
