// Module imports
import http from 'http';
import { express } from 'hyper-express';
import { Socket } from 'socket.io';
import { Gpio } from "onoff";

// Server declarations
const app = express();
const server = http.createServer(app);
const io = new Socket(server);

// Middleware declarations
app.use(express.static('public'));


// Create back button listener
const button = new Gpio(529, 'in', 'rising');
button.watch((err, val) => {
  if (err) {
    console.error('There was an error', err);
    return;
  }
  console.log('Button was pressed! ' + val);
  io.emit('button-press', val);
});

// Server running
console.log('Button server running');

io.on('connection', (socket) => {
  console.log('a user connected');
});

server.listen(3001, () => {
  console.log('listening on *:3001');
});

process.on('SIGINT', () => {
  button.unexport();
  process.exit();
});