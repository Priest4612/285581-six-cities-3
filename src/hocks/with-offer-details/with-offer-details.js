import React, {PureComponent} from 'react';
import OfferDetails from '../../offer-details/offer-details.jsx';

const withOfferDetails = (Component) => {
  class WithOfferDetails extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeOffer: null,
      };
    }

    render() {
      /* const {activeOffer} = this.state; */

      return <Component
        {...this.props}
        renderOfferDetails={(offer) => {
          return (
            <OfferDetails
              offer={offer}
            />
          );
        }}
      />;
    }
  }

  WithOfferDetails.propTypes = {};

  return WithOfferDetails;
};

export default withOfferDetails;
