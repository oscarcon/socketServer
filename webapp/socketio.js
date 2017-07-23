var socket = io.connect('http://192.168.1.5:8080');
console.log(socket);
function run() {
    socket.emit('hello', {hi: 'I am'});
    socket.on('connect', function (data) {
        console.log(data);
        socket.emit('hello', {my: 'data'});
    });
};




