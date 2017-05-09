import * as c from '../actions/constants';

export default function channelList(state = [], action) {
    switch (action.type) {
        case c.FETCH_CHANNELS_SUCCESS:
            return action.channels;
        default:
            return state;
    }
}

