import React from 'react';
import ReactDom from 'react-dom';

import App from './components/app/app.jsx';
import offers from './mock/offers.js';

/* const Settings = {
  OFFERS_COUNT: 22,
}; */

ReactDom.render(
    <App
      /* offersCount={Settings.OFFERS_COUNT} */
      offers={offers}
    />,
    document.querySelector(`#root`)
);
