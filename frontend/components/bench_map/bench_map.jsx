import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import MarkerManager from '../../util/marker_manager';

const getCoordsObj = latLng => ({
    lat: latLng.lat(),
    lng: latLng.lng()
});

const mapOptions ={
    center: {
        lat: 53.480759,
        lng: -2.242631
    },
    zoom: 13
};

class BenchMap extends Component {
    componentDidMount() {
        const map = this.refs.map;
        this.map = new google.maps.Map(mapDOMNode, mapOptions);
        this.MarkerManager = new MarkerManager(this.map);
        this.MarkerManager.updateMarkers(this.props.benches);
        this.registerListeners();
    }

    componentDidUpdate() {
        this.MarkerManager.updateMarkers(this.props.benches);
    }

    registerListeners() {
        google.maps.event.addListener(this.map, 'idle', () => {
            const { north, south, east, west } = this.map.getBounds().toJSON();
            const bounds = {
                northEast: { lat: north, lng: east },
                southWest: { lat: south, lng: west } };
            this.props.updateFilter('bounds', bounds);
        });
        google.maps.event.addListener(this.map, 'click', (event) => {
            const coords = getCoordsObj(event.latLng);
            this.handleClick(coords);
        });
    }

    render() {
        return (
            <div id="map-container" ref={ map => this.mapNode = map }>
                Map
            </div>
        )
    }
}

export default BenchMap;