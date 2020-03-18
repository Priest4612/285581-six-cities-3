import React from 'react';
import ReactDom from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import App from './components/app/app.jsx';

import offers from './mock/offers.js';
import cities from './mock/cities';

import {reducer} from './reducer.js';


const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

ReactDom.render(
    <Provider store={store}>
      <App
        offers={offers}
        cities={cities}
      />
    </Provider>,

    document.querySelector(`#root`)
);
