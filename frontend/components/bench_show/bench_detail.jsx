import React from 'react';
import { Link } from 'react-router-dom';

const BenchDetail = ({ bench }) => {
    return (
        <div>
            <ul className="bench-list">
                <li>Description: {bench.description}</li>
                <li>Seats: {bench.seating}</li>
                <li>Latitude: {bench.lat}</li>
                <li>Longitude: {bench.lng}</li>
            </ul>
        </div>
    );
};

export default BenchDetail;