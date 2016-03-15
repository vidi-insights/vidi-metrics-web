
var dgram = require('dgram')
var client = dgram.createSocket('udp4')
console.log('hello');
client.on('message', function(msg) {
  
  console.log(JSON.parse(msg.toString('utf8')))
})
client.bind(5001,'localhost')