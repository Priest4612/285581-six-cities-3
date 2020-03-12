import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';

import Main from '../main/main.jsx';
import OfferDetails from '../offer-details/offer-details.jsx';

const ViewMode = {
  MAIN: `main`,
  DETAIL: `detail`,
};


class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      viewMode: ViewMode.MAIN,
      activeOfferId: null,
    };

    this._handleRentalHeaderClick = this._handleRentalHeaderClick.bind(this);
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
            <OfferDetails
              activeOfferId={offers[0].id}
              offers={offers}
              handleRentalHeaderClick={this._handleRentalHeaderClick}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }

  _renderApp(offers) {
    switch (this.state.viewMode) {
      case ViewMode.MAIN:
        return (
          <Main
            offers={offers}
            handleRentalHeaderClick={this._handleRentalHeaderClick}
          />
        );
      case ViewMode.DETAIL:
        return (
          <OfferDetails
            activeOfferId={this.state.activeOfferId}
            offers={offers}
            handleRentalHeaderClick={this._handleRentalHeaderClick}
          />
        );
    }
    return null;
  }

  _handleRentalHeaderClick(id) {
    this.setState({
      viewMode: ViewMode.DETAIL,
      activeOfferId: id,
    });
  }
}


App.propTypes = {
  offers: PropTypes.array.isRequired,
};

export default App;
