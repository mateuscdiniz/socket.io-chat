const express = require('express'); //importando o express
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.static('public')); //serve arquivos estáticos, diz que os arquivos css, html estão na pasta public

io.on('connection', socket => { //o socket representa o cliente
    console.log('um novo usuário está conectado');

    socket.on('disconnect', () => {
        console.log('um usuário desconectou');
    });

    socket.on('mensagem', msg => {
        io.emit('mensagem', msg); //broadcast
    });
})

http.listen(3000, () => console.log('Listening on *:3000'));



