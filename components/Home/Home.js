import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

import Map from '../Map';
import Grid from '../Grid';

import './Home.styl';

export const Home = React.createClass({

  componentDidMount: function () {

  },

  render: function () {
    return (
      <div className="Home">
        <Map />
        <Grid />
      </div>
    );
  }
});

export default Home;
