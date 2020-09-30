import React from 'react';

import BenchIndex from './bench_index';
import BenchMap from '../bench_map/bench_map';

const Search = ({ benches }) => (
    <div className="user-pane">
        <div className="left-half">
            <h5>Click Map to Add Bench!</h5>
            <BenchMap
                benches={benches}
            />
        </div>
        <div className="right-half">
            <BenchIndex benches={benches} />
        </div>
    </div>
);

export default Search;