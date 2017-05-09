import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import ChannelList from './containers/ChannelList';

class App extends Component {

  render() {
    return (
      <Grid>
        <Row>
          <Col>
            <h1>Channels</h1>
            <ChannelList />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;

