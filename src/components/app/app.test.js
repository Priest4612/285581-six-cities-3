import React from 'react';
import renderer from 'react-test-renderer';
import App from '../app/app.jsx';


describe(`Render App`, () => {
  it(`App place Count = 13`, () => {
    const tree = renderer
      .create(<App
        offersCount={13}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
