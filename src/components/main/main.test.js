import React from 'react';
import renderer from 'react-test-renderer';
import Main from '../main/main.jsx';


describe(`Render Main`, () => {
  it(`Main place Count = 13`, () => {
    const tree = renderer
      .create(<Main
        placeCount={13}
        onRentalTitleClick={() => {}}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
