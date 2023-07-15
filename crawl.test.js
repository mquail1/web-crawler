// Jest test file for crawl.js

// Import module:
const { normalizeURL } = require('./crawl.js');

// Jest imports:
const {test, expect} = require('@jest/globals');

//* test() function:
// Param 1: function already written
// Param 2: function to test param1

test('normalizeURL strip protocol', () => {

    const input = 'https://www.twitch.tv/barry'; // input for function
    const actual = normalizeURL(input);
    const expected = 'twitch.tv/barry'; // expected output for function
    
    // expect Jest import
    expect(actual).toEqual(expected) // expect(actual) should be equal to the value in 'expected'

});

test('normalizeURL strip trailing slashes', () => {

    const input = 'https://www.twitch.tv/barry/'; // input for function
    const actual = normalizeURL(input);
    const expected = 'twitch.tv/barry'; // expected output for function
    
    // expect Jest import
    expect(actual).toEqual(expected) // expect(actual) should be equal to the value in 'expected'

});

test('normalizeURL capitals', () => {

    const input = 'HTTPS://www.twitch.tv/BARRY/'; // input for function
    const actual = normalizeURL(input);
    const expected = 'twitch.tv/barry'; // expected output for function
    
    // expect Jest import
    expect(actual).toEqual(expected) // expect(actual) should be equal to the value in 'expected'

});