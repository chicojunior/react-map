import React, { PropTypes } from 'react';
import { render } from 'react-dom';

import './GridRow.styl';

export const GridRow = React.createClass({

  render () {
    return (
      <div className="pure-g row">
        <div className="pure-u-1-4">
          {this.props.data.gym}
        </div>
        <div className="pure-u-1-4">
          {this.props.data.team}
        </div>
        <div className="pure-u-1-4">
          {this.props.data.address}
        </div>
        <div className="pure-u-1-4">
          {this.props.data.instructor}
        </div>
      </div>
    );
  }
});

export default GridRow;
