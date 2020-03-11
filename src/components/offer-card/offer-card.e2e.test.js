import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import OfferCard from './offer-card.jsx';

Enzyme.configure({
  adapter: new Adapter(),
});

const offer = {
  id: 23,
  isPremium: true,
  picture: `pleasure-room.jpg`,
  price: 888,
  isBookmark: true,
  rating: 3,
  name: `room`,
  type: `Private room`,
};

const CLS_NAME = `cities`;


describe(`Checked handler`, () => {
  it(`On offer card mouse enter`, () => {
    const onOfferMouseLeave = jest.fn();

    const offerCard = shallow(
        <OfferCard
          key={offer.id}
          clsName={CLS_NAME}
          offer={offer}
          handleRentalHeaderClick={() => {}}
          onOfferMouseEnter={onOfferMouseLeave}
          onOfferMouseLeave={() => {}}
        />
    );

    offerCard.simulate(`mouseEnter`, onOfferMouseLeave);

    expect(onOfferMouseLeave.mock.calls[0][0]).toBe(offer);
    expect(onOfferMouseLeave.mock.calls.length).toBe(1);
  });

  it(`Should rental title be pressed`, () => {
    const handleRentalHeaderClick = jest.fn();

    const offerCard = shallow(
        <OfferCard
          key={offer.id}
          clsName={CLS_NAME}
          offer={offer}
          handleRentalHeaderClick={handleRentalHeaderClick}
          onOfferMouseEnter={() => {}}
          onOfferMouseLeave={() => {}}
        />
    );

    const offerTitleLink = offerCard.find(`h2.place-card__name a`);

    offerTitleLink.props().onClick();
    expect(handleRentalHeaderClick.mock.calls.length).toBe(1);
  });


});
