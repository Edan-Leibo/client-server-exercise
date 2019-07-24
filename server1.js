const http = require('http');

const init = (port) => {
    http.Server((req, res) => {
        console.log("Request accepted - waiting 2 seconds")
        Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 2000);
        res.writeHead(200);
        res.end('Hello from server :)');
    }).listen(port, () => console.log(`Listening on port ${port}`));
}

module.exports = init;