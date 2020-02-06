import React from 'react';
import Main from '../main.jsx';

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {placeCount} = props;

  return (
    <Main
      placeCount = {placeCount}
    />
  );
};

export default App;
