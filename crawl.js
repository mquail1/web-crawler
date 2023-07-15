const {JSDOM} = require('jsdom');

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

// returns array of url strings from body of HTML
function getURLfromHTML(htmlBody, baseURL) {

    // create URLs array
    const urls = [];

    // Create DOM and select all <a> tags
    const dom = new JSDOM(htmlBody);
    const linkElements = dom.window.document.querySelectorAll('a'); // returns all link elements

    // loop through array
    for(const linkElement of linkElements) {

        // relative / absolute path logic
        if(linkElement.href.slice(0, 1) === '/'){ // if the first character in the string is /
           
            // link is a relative url
            try {
                const normalizedURL = new URL(`${baseURL}${linkElement.href}`); // sanitizes for invalid URLS
                urls.push(normalizedURL.href); // push baseURL appended with relative path
            }
            catch (error) { // URL is invalid
                console.log(`error with relative URL: ${error}`);
            }
        }

        else {

            try {
                const normalizedURL = new URL(linkElement.href); // sanitizes for invalid URLS
                urls.push(normalizedURL.href); // push baseURL appended with relative path
            }
            catch (error) {
                console.log(`error with absolute URL: ${error}`);
            }
        }
        
    }

    return urls;
}

// Exports the given functions to other scripts
module.exports = {

    normalizeURL,
    getURLfromHTML

}