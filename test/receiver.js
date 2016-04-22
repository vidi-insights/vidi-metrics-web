'use strict'

// sets host and port number for InfluxDB
var opts = {
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || 5001
}

// making a UDP instance
var Dgram = require('dgram')
var client = Dgram.createSocket('udp4')

console.log('Receiver Started...')

// whenever message is sent to client it will be sent to the screen
client.on('message', (msg) => {
  console.log(JSON.parse(msg.toString('utf8')))
})

// sets port and host number for this file
client.bind(opts.port, opts.host)
