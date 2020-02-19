import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from '../main/main.jsx';

Enzyme.configure({
  adapter: new Adapter(),
});

const offers = [
  {
    id: 13,
    isPremium: true,
    picture: `apartment-01.jpg`,
    price: 129,
    isBookmark: false,
    rating: 4,
    name: `apartment-01`,
    type: `Apartment`,
  }, {

    id: 23,
    isPremium: false,
    picture: `room.jpg`,
    price: 88,
    isBookmark: true,
    rating: 3,
    name: `room`,
    type: `Private room`,
  }
];

describe(`Tect title rental`, () => {
  it(`Should rental title be pressed`, () => {
    const handleRentalHeaderClick = jest.fn();

    const mainElement = shallow(
        <Main
          offers={offers}
          handleRentalHeaderClick={handleRentalHeaderClick}
        />
    );

    const RentalTitleLinks = mainElement.find(`h2.place-card__name a`);

    RentalTitleLinks.forEach((item) => {
      item.props().onClick();
    });

    expect(handleRentalHeaderClick.mock.calls.length).toBe(RentalTitleLinks.length);
  });
});
