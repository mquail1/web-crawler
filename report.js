function sortPages(pages) {
    
    // store and structure array
    const pagesArray = Object.entries(pages);

    // sort array
    pagesArray.sort((a, b) => {
        // index 1 contains webpage count:
        aHits = a[1];
        bHits = b[1];

        // sort from largest to smallest:
        return b[1] - a[1];
    });

    return pagesArray;
}

// Formats reports for console
function printReport(pages) {

    console.log("====================");
    console.log("=======REPORT=======");
    console.log("====================");

    // sort pages
    const sortedPages = sortPages(pages)

    // iterate
    for (const sortedPage of sortedPages) {
        const url = sortedPage[0]; // url stored at 1st position
        const hits = sortedPage[1]; // page visits are stored in 2nd position

        console.log(`Found ${hits} links to the page: ${url}`);
    }

    console.log("========================");
    console.log("=======END REPORT=======");
    console.log("========================");

}

module.exports = {

    sortPages,
    printReport

}