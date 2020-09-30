import { connect } from 'react-redux';

import { fetchBenches } from '../actions/bench_actions'
import { asArray } from '../reducers/selectors';
import BenchIndex from './bench_index';

const mapStateToProps = state => ({
    benches: asArray(state.entities),
});

const mapDispatchToProps = dispatch => ({
    fetchBenches: dispatch(fetchBenches)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BenchIndex);