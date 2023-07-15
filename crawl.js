// Function to normalize URLs
// Normalizes urls to the same value (if they represent/redirect to the same webpage)

// 'https://twitch.tv' -> 'twitch.tv'
// 'http://twitch.tv' -> 'twitch.tv'
// 'https://www.twitch.tv' -> 'twitch.tv'

function normalizeURL(urlString) {

    // URL object constructor
    const urlObject = new URL(urlString);

    const hostpath = `${urlObject.hostname.substring(4)}${urlObject.pathname.toLowerCase()}`; // remove the subdomain with substring(4)

    if(hostpath.length > 0 && hostpath.slice(-1) === '/') { // .slice(-1) returns the last character
        return hostpath.slice(0, -1); // starts at 0 index of string, removes last character
    }

    return hostpath;

}

// Makes this file available to other files in project
module.exports = {

    normalizeURL

}