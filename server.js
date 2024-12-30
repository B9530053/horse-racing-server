const WebSocket = require('ws');

// 建立 WebSocket 伺服器
const server = new WebSocket.Server({ port: 8080 });

server.on('connection', (socket) => {
    console.log('A client connected!');

    // 接收來自客戶端的訊息
    socket.on('message', (message) => {
        console.log('Received from client:', message);

        // 回應訊息給客戶端，確保是文字格式
        socket.send('Hello from server!');
    });

    // 當客戶端斷線時
    socket.on('close', () => {
        console.log('A client disconnected.');
    });
});

console.log('WebSocket server is running on ws://localhost:8080');
