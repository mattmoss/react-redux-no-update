import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

class ChannelListView extends React.Component {
    render() {
        const { channels, current, onSelect } = this.props;

        console.log("channels:", channels, "current:", current);

        return (
            <ListGroup>
                {channels.map(channel =>
                    <ListGroupItem
                        key={channel.id}
                        active={channel.id === this.props.current}
                        onClick={onSelect(channel.id)}
                    >
                        <strong>#{channel.name}</strong>
                    </ListGroupItem>
                )}
            </ListGroup>
        );
    }
}

export default ChannelListView;

