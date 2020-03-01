import React, {PureComponent, createRef} from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';


class Map extends PureComponent {
  constructor(props) {
    super(props);

    this._mapRef = createRef();
    this._Map = {
      CITY: [52.38333, 4.9],
      ICON: leaflet.icon({
        iconUrl: `img/pin.svg`,
        iconSize: [30, 30]
      }),
      ZOOM: 12,
    };
  }

  render() {
    return (
      <div id="map" style={{height: `100%`, width: `100%`}} ref={this.mapRef}></div>
    );
  }

  componentDidMount() {
    const {offerCords} = this.props;

    const map = leaflet.map(`map`, {
      center: this._Map.CITY,
      zoom: this._Map.ZOOM,
      zoomControl: false,
      marker: true,
    });

    map.setView(this._Map.CITY, this._Map.ZOOM);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);

    offerCords
    .forEach((offer) => leaflet
                      .marker(offer.coordinates, this._Map.ICON)
                      .addTo(map));
  }
}

Map.propTypes = {
  offerCords: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Map;
