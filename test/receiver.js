'use strict'

var opts = {
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || 5001
}

var dgram = require('dgram')
var client = dgram.createSocket('udp4')

console.log('Receiver Started...')

client.on('message', (msg) => {
  console.log(JSON.parse(msg.toString('utf8')))
})

client.bind(opts.port, opts.host)
