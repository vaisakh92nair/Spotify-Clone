// For spotify documentation follow the following link
// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#

export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";

// get the client id from https://developer.spotify.com/dashboard/applications by creating an app
const clientId = "fc8eafafcec648fca6d4f73cc12b303d";

//scopes are used to give user the functionalities that they can use once logged in
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

// used to get the access token from the Url which is returned when you click on the login with spotify button
//substring used to get the first substring after the hash
//split used to only get the first substring and nothing after the & 
// reduce splits the substring using = and return the access token using decodeURIComponent
export const getTokenFromUrl = () => {
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
        let parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1]);

        return initial;
    }, {});
}
// %20 is the ascii for space and it is basically joining scopes by spaces
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;