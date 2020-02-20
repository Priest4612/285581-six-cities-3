import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';

import Main from '../main/main.jsx';
import OfferDetails from '../../offer-details/offer-details.jsx';


class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {offers} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            {this._renderApp(offers)}
          </Route>
          <Route exact path='/dev-component'>
            {<OfferDetails
              offer={offers[0]}
            />}
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }

  _renderApp(offers) {

    return (
      <Main
        offers={offers}
        handleRentalHeaderClick={this._handleRentalHeaderClick}
      />
    );
  }

  _handleRentalHeaderClick(/* id */) {
    return/*  id */;
  }
}


App.propTypes = {
  offers: PropTypes.array.isRequired,
};

export default App;
