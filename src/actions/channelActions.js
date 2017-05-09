import * as c from './constants';
import ChannelApi from '../api/channelApi';

export function fetchChannels() {
    return (dispatch) => {
        return ChannelApi.allChannels()
            .then(channels => dispatch(fetchChannelsSuccess(channels)))
            .catch(error => { throw(error); });
    };
}

export function fetchChannelsSuccess(channels) {
    return {
        type: c.FETCH_CHANNELS_SUCCESS,
        channels
    };
}

// export function fetchChannelFailure(error) {
//     return {
//         type: c.FETCH_CHANNELS_FAILURE,
//         error
//     };
// }

