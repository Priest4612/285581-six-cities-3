import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main.jsx';

const rentalTitleHandler = () => {};

const App = (props) => {
  const {placeCount} = props;

  return (
    <Main
      placeCount={placeCount}
      onRentalTitleClick={rentalTitleHandler}
    />
  );
};

App.propTypes = {
  placeCount: PropTypes.number.isRequired,
};

export default App;
