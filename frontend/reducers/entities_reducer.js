import { combineReducers } from 'redux';

import users from './users_reducer';
import benches from './benches_reducer';

export default combineReducers({
    users,
    benches,
});