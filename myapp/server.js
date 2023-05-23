const express = require('express')
const app = express();
const {Server} = require('socket.io'); 
const http = require('http');
const { Socket } = require('dgram');

const server = http.createServer(app)

const io = new Server(server);

io.on('connection' , (socket)=>{
    console.log('Socket Connected' , socket.id);
});

const PORT = process.env.port || 5000;
server.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`);
})