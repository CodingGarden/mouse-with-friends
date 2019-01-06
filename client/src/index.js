// THIS IS THE CLIENT!!!
import io from 'socket.io-client';

const API_URL = 'http://localhost:5000';
const socket = io.connect(API_URL);
const mice = {};

socket.on('connect', () => {
  console.log('connected to the socket server!');
});

socket.on('message-client-disconnected', (id) => {
  if (mice[id]) {
    document.body.removeChild(mice[id]);
  }
});

socket.on('mousemove', (event) => {
  // if (socket.id !== event.id) {
    let mouse = mice[event.id];
    if (!mouse) {
      const span = document.createElement('span');
      span.style.position = 'absolute';
      span.textContent = '🐁';
      mice[event.id] = span;
      mouse = span;
      document.body.appendChild(span);
    }
    mouse.style.top = event.y + 'px';
    mouse.style.left = event.x + 'px';
  // }
});

document.addEventListener('mousemove', (event) => {
  socket.emit('mousemove', {
    x: event.clientX,
    y: event.clientY
  });
});
