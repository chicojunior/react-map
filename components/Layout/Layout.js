import React from 'react';

const Html = (props) => (
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, minimum-scale=1.0" />

      <link rel="stylesheet" href="https://unpkg.com/leaflet@1.0.0-rc.3/dist/leaflet.css" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic" />
      <link rel="stylesheet" href="http://yui.yahooapis.com/pure/0.6.0/pure-min.css" />
      <link rel="stylesheet" href="http://yui.yahooapis.com/pure/0.6.0/grids-responsive-min.css" />

      <title>React Map Test</title>

      <script dangerouslySetInnerHTML={{ __html: "console.log('analytics')" }} />
    </head>
    <body>
      <div id="root" dangerouslySetInnerHTML={{ __html: props.body }} />

      <script src="https://unpkg.com/leaflet@1.0.0-rc.3/dist/leaflet.js"></script>
      <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAmX52AfcwB7vH3xW3sMPz8G4xdOVJrp4g"></script>
      <script src="/app.js"/>
      <link href="/app.css" rel="stylesheet" />
    </body>
  </html>
);

export default Html;
