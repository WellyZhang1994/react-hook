import { combineReducers } from 'redux';
import { getBasicInfo } from './sample';

export default combineReducers({
    info : getBasicInfo
})