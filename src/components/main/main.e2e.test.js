import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from '../main/main.jsx';

Enzyme.configure({
  adapter: new Adapter(),
});

const offersCount = 17;

describe(`Tect title rental`, () => {
  it(`Should rental title be pressed`, () => {
    const onRentalTitleClick = jest.fn();

    const mainElement = shallow(
        <Main
          offersCount={offersCount}
          onRentalTitleClick={onRentalTitleClick}
        />
    );

    const RentalTitleLinks = mainElement.find(`h2.place-card__name a`);

    RentalTitleLinks.forEach((item) => {
      item.props().onClick();
    });

    expect(onRentalTitleClick.mock.calls.length).toBe(RentalTitleLinks.length);
  });
});
