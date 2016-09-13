import React, { PropTypes } from 'react';

import Navigator from '../Navigator';
import Footer from '../Footer';

import './App.styl';

const App = React.createClass({

propTypes: {
  children: PropTypes.any,
},

render: function () {

  return (
    <div>
      <Navigator />
      { this.props.children }
      <Footer />
    </div>
  );
}
});

module.exports = App;
