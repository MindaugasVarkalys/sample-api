require('uWebSockets.js').App()
.any('/', (res, req) => {

    console.log("GOT REQUEST!");
    res.end('Hello world!');

}).listen(8000, (listenSocket) => {
    if (listenSocket) {
        console.log('Listening to port 8000');
    }
});