const { sortPages } = require('./report.js');
const { test, expect } = require('@jest/globals');

test('Sorting 2 pages', () => {

    // manual pages object
    const input = {
        'https://wagslane.dev/path': 1,
        'https://wagslane.dev': 3
    }
    const actual = sortPages(input);

    // should sort highest to lowest
    const expected = [
        ['https://wagslane.dev', 3],
        ['https://wagslane.dev/path', 1]
    ];
    
    // expect Jest import
    expect(actual).toEqual(expected);

});

test('Sorting multiple pages', () => {

    // manual pages object
    const input = {
        'https://wagslane.dev': 1,
        'https://wagslane.dev/path5': 2,
        'https://wagslane.dev/path4': 3,
        'https://wagslane.dev/path3': 4,
        'https://wagslane.dev/path2': 5,
        'https://wagslane.dev/path1': 6
    }
    const actual = sortPages(input);

    // should sort highest to lowest
    const expected = [
        ['https://wagslane.dev/path1', 6],
        ['https://wagslane.dev/path2', 5],
        ['https://wagslane.dev/path3', 4],
        ['https://wagslane.dev/path4', 3],
        ['https://wagslane.dev/path5', 2],
        ['https://wagslane.dev', 1]
    ];
    
    // expect Jest import
    expect(actual).toEqual(expected);

});