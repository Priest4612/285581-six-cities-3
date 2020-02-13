import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main.jsx';

const App = (props) => {
  const {placeCount} = props;

  return (
    <Main
      placeCount={placeCount}
    />
  );
};

App.propTypes = {
  placeCount: PropTypes.number.isRequries,
};

export default App;
