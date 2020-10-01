import React from 'react';
import { Link } from 'react-router-dom';

import BenchDetail from './bench_detail';
import BenchMap from '../bench_map/bench_map';
import BenchShowContainer from './bench_show_container';
import { ProtectedRoute } from '../../util/route_util';

const BenchShow = ({ bench, benchId, fetchBench }) => {
    const benches = {
        [benchId]: bench
    };

    return (
        <div>
            <BenchMap 
                benches={benches}
                benchId={benchId}
                fetchBench={fetchBench}
            />
        </div>
    );
};

export default BenchShow;