const http = require('http');
function makeRequests(reqAmount) {
    for (let index = 0; index < reqAmount; index++) {
        http.get('http://localhost:8001/', resp => {
            let data = '';
            resp.on('data', (chunk) => {
                data += chunk;
            });
            resp.on('end', () => {
                console.log(`Client call #${index} completed `);
                console.log(`Server sent: "${data}"`)
            });
        });
    }
}

module.exports = makeRequests;