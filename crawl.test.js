// Jest test file for crawl.js

// Import module:
const { normalizeURL, getURLfromHTML } = require('./crawl.js');

// Jest imports:
const {test, expect} = require('@jest/globals');

//? test() function:
// Param 1: function already written
// Param 2: function to test param1

//* ----------- normalizeURL() -----------

test('normalizeURL strip protocol', () => {

    const input = 'https://www.twitch.tv/barry'; // input for function
    const actual = normalizeURL(input);
    const expected = 'twitch.tv/barry'; // expected output for function
    
    // expect Jest import
    expect(actual).toEqual(expected) // expect(actual) should be equal to the value in 'expected'

});

test('normalizeURL strip trailing slashes', () => {

    const input = 'https://www.twitch.tv/barry/';
    const actual = normalizeURL(input);
    const expected = 'twitch.tv/barry';
    
    expect(actual).toEqual(expected)
});

test('normalizeURL capitals', () => {

    const input = 'HTTPS://www.twitch.tv/BARRY/';
    const actual = normalizeURL(input);
    const expected = 'twitch.tv/barry';
    
    expect(actual).toEqual(expected)
});

//* ----------- getURLfromHTML() -----------

test('getURLfromHTML absolute URLs', () => {

    const inputHTMLBody = `
    <html>
        <body>
            <a href = "https://www.twitch.tv/Barry">twitch.tv/Barry</a>
        </body>
    </html>
    `;
    const inputBaseURL = "https://www.twitch.tv/Barry";
    const actual = getURLfromHTML(inputHTMLBody, inputBaseURL);
    const expected = ["https://www.twitch.tv/Barry"];
    
    expect(actual).toEqual(expected)
});

// instead of a full URL, only includes a path
test('getURLfromHTML relative URLs', () => {

    const inputHTMLBody = `
    <html>
        <body>
            <a href = "/path/">twitch.tv/Barry</a>
        </body>
    </html>
    `;
    const inputBaseURL = "https://www.twitch.tv/Barry";
    const actual = getURLfromHTML(inputHTMLBody, inputBaseURL);
    const expected = ["https://www.twitch.tv/Barry/path/"];
    
    expect(actual).toEqual(expected)
});

test('getURLfromHTML mixed URL types', () => {

    const inputHTMLBody = `
    <html>
        <body>
            <a href = "/path1/">twitch.tv/Barry</a>
            <a href = "https://www.twitch.tv/barry">twitch.tv/Barry</a>
        </body>
    </html>
    `;
    const inputBaseURL = "https://www.twitch.tv/Barry";
    const actual = getURLfromHTML(inputHTMLBody, inputBaseURL);
    const expected = ["https://www.twitch.tv/Barry/path1/", "https://www.twitch.tv/barry"];
    
    expect(actual).toEqual(expected)
});

test('getURLfromHTML disclude bad URLS', () => {

    const inputHTMLBody = `
    <html>
        <body>
            <a href = "invalid url">Invalid URL</a>
        </body>
    </html>
    `;
    const inputBaseURL = "https://www.twitch.tv/Barry";
    const actual = getURLfromHTML(inputHTMLBody, inputBaseURL);
    const expected = [];
    
    expect(actual).toEqual(expected)
});