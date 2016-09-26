import React, { PropTypes } from 'react';
import { render } from 'react-dom';

import GridHeader from '../GridHeader';
import GridRow from '../GridRow';

import './Grid.styl';

const gyms = [
  {
    gym: "Renovação",
    team: "Greenmile",
    address: "Av. Engenheiro Luís Vieira, 920, Dunas, Fortaleza, CE, Brasil",
    instructor: "Milfont"
  },
  {
    gym: "Team Nogueira",
    team: "No Gi Team",
    address: "Rua Tabelião Joaquim Coelho, 50, Fortaleza - CE",
    instructor: "Cupim"
  }
]

export const Grid = React.createClass({

  componentDidMount () {

    // function getGymsFromApi() {
    //   return fetch('https://facebook.github.io/react-native/movies.json')
    //     .then((response) => response.json())
    //     .then((responseJson) => {
    //       return responseJson.movies;
    //     })
    //     .catch((error) => {
    //       console.error(error);
    //     });
    // }

  },

  render () {

    return (
      <div className="Grid">

        <GridHeader />

        {gyms.map(function(gym) {
          return <GridRow key={gym.id} data={gym} />
        })}

      </div>
    );
  }
});

export default Grid;
