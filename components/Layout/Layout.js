import React from 'react';

const Html = (props) => (
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, minimum-scale=1.0" />

      <title>Francisco do Vale</title>

      <script dangerouslySetInnerHTML={{ __html: "console.log('analytics')" }} />
    </head>
    <body>
      <div id="root" dangerouslySetInnerHTML={{ __html: props.body }} />

      <script src="/app.js"/>
      <link href="http://yui.yahooapis.com/pure/0.6.0/pure-min.css" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" />
      <link href="/app.css" rel="stylesheet" />
    </body>
  </html>
);

export default Html;
