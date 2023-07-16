const {crawlPage} = require('./crawl.js');

// Driver
function main() {

    // check command line arguments have been passed properly
    if (process.argv.length < 3) { // always 2 args to every program; 3 is the arg provided by us
        console.log("No valid website provided.");
        process.exit(1);
    }

    if (process.argv.length > 4) { // more than one website has been provided; won't work
        console.log("Only a single website can be crawled at a time.");
        process.exit(1);
    }

    const baseURL = process.argv[2];

    console.log(`The website you chose is : ${baseURL}`);

    crawlPage(baseURL);

}

main();