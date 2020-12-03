import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import Player from './Player';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi();
function App() {
  // state is the short time memory store. null used for initial value
  // to use the datalayer 
  const [{user, token}, dispatch] = useDataLayerValue();

  //Used to run a code based on a certain condition
  //if empty array in the useEffect it runs once and if a variable is passed it runs as the variable value changes
  useEffect(() => {
    const hash = getTokenFromUrl();
    // clearing the token from url
    window.location.hash ="";
    const _token = hash.access_token;

    if(_token) {
      dispatch({
        type: 'SET_TOKEN',
        token: _token
      });

      spotify.setAccessToken(_token);
      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user: user
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists
        });
      });

      spotify.getPlaylist('37i9dQZEVXcFCn3uc5WWbX').then((discoverWeekly)=> {
        dispatch({
          type: 'SET_DISCOVER_WEEKLY',
          discover_weekly: discoverWeekly
        });
      });
    }
  }, []);
  

  return (
    <div className="app">
      {
        token ? <Player spotify={spotify}/> : <Login />
      }
    </div>
  );
}

export default App;
