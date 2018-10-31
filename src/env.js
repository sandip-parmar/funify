const client_id = "2fdaa87358fd434f84c5c3c481ba2ca6";
const scope = "user-read-private user-read-email";
const redirect_uri = "http://localhost:3000/home";

let url = 'https://accounts.spotify.com/authorize';
        url += '?response_type=token';
        url += '&client_id=' + encodeURIComponent(client_id);
        url += '&scope=' + encodeURIComponent(scope);
        url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
            
export const spotify_url = url;
export const token_type = "Bearer";
export const expires_in = "3600";