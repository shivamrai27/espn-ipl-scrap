const request = require('request');
const url = "https://www.espncricinfo.com/series/indian-premier-league-2023-1345038/gujarat-titans-vs-mumbai-indians-qualifier-2-1370352/ball-by-ball-commentary";
request(url, cb)
console.log("Before");
function cb(err, response, html) {
    if (err) {
        console.log(err);
    } else {
        console.log(html);
    }

}
console.log("After");
