import { combineReducers } from 'redux';
import channelList from './channelList';
import currentChannel from './currentChannel';

const rootReducer = combineReducers({
    channelList,
    currentChannel,
});

export default rootReducer;

