import { Gpio } from "onoff";

const button = new Gpio(17, 'in', 'both');

console.log('Button server running');

button.watch((err, value) => {
  if (err) {
    console.error('There was an error', err);
    return;
  }
  console.log('Button was pressed!');
});