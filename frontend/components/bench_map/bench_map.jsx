import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const mapOptions ={
    center: { lat: 53.480759, lng: -2.242631 },
    zoom: 13
};

class BenchMap extends Component {
    componentDidMount() {
        const map = this.refs.map;
        this.map = new google.maps.Map(this.mapNode, mapOptions);
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