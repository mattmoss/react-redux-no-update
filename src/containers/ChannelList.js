import { connect } from 'react-redux';

import ChannelListView from '../components/ChannelListView';

const mapStateToProps = (state, ownProps) => {
    return {
        channels: state.channelList,
        current: state.currentChannel
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSelect: (id) => () => {}
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChannelListView);

