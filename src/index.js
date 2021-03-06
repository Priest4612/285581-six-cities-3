import React from 'react';
import ReactDom from 'react-dom';

import App from './components/app/app.jsx';
import offers from './mock/offers.js';


ReactDom.render(
    <App
      offers={offers}
    />,
    document.querySelector(`#root`)
);
