import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import Main from '../main/main.jsx';


class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {offers} = this.props;

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
