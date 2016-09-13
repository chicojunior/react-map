import React, { PropTypes } from 'react';

import './Footer.styl';

export const Footer = React.createClass({

  componentDidMount: function () {

  },

  render: function () {
    return (
      <div className="Footer">

        <div className="Footer__Container">
          <div class="pure-g">

            <div className="pure-u-1-2 pure-u-md-1-2">
              <div className="pure-menu pure-menu-horizontal Navigator__Menu">
                <ul className="pure-menu-list">
                  <li className="pure-menu-item">
                    <a href="" className="Navigator__Link">Linkedin</a>
                  </li>
                  <li className="pure-menu-item">
                    <a href="" className="Navigator__Link">Github</a>
                  </li>
                  <li className="pure-menu-item">
                    <a href="" className="Navigator__Link">Twitter</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
});

export default Footer;
