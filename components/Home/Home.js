import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

import './Home.styl';

export const Home = React.createClass({

  componentDidMount: function () {

  },

  render: function () {
    return (
      <div className="Home middle-component">
        <div className="Hero">
          <div className="pure-g">
            <div className="pure-u-1-4">
              <h1>Home</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

export default Home;
