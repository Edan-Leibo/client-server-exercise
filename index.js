const init = require("./server1.js");
const makeRequests = require("./client.js");

const port = 8001;
const reqAmount = 10;

init(port);
makeRequests(reqAmount);


