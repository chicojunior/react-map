import React, { PropTypes } from 'react';
import { render } from 'react-dom';

import './GridHeader.styl';

export const GridHeader = React.createClass({

  componentDidMount () {

  },

  render () {
    return (
      <div className="pure-g">
        <div className="pure-u-1-4 header">
          Escola
        </div>
        <div className="pure-u-1-4 header">
          Equipe
        </div>
        <div className="pure-u-1-4 header">
          Endereço
        </div>
        <div className="pure-u-1-4 header">
          Instrutor
        </div>
      </div>
    );
  }
});

export default GridHeader;
