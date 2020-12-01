import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import Player from './Player';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();
function App() {
  // state is the short time memory store. null used for initial value
  const [token, setToken] = useState(null);

  //Used to run a code based on a certain condition
  //if empty array in the useEffect it runs once and if a variable is passed it runs as the variable value changes
  useEffect(() => {
    const hash = getTokenFromUrl();
    // clearing the token from url
    window.location.hash ="";
    console.log(hash);
    const _token = hash.access_token;

    if(_token) {
      setToken(_token);
      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {
        console.log(user);
      })
    }
  }, []);
  return (
    <div className="app">
      {
        token ? <Player /> : <Login />
      }
    </div>
  );
}

export default App;
