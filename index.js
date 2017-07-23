// them modules
var ip = require('ip'); 
var socketio = require('socket.io');
var express = require('express');
var app = express(); 
var server = require('http').Server(app);
var io = socketio(server);
//
app.use(express.static('node_modules/socket.io-client/dist'));
app.use(express.static('webapp'));
   // khoi tao server
//app.set('port', (process.env.PORT || 8080));
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/webapp/index.html');  
});
/*app.listen(8080, function() {
    console.log('Server is running at ' + ip.address() + ':' + 8080);
})*/
server.listen(8080, function () {
    console.log('listening on ' + ip.address() + ':' + 8080);
});
io.on('connection', function (socket) {
    console.log('A client connected!');
    socket.emit('connect', {hello: 'world'});
    socket.on('hello', function (data) {
        console.log(data);
    });
});