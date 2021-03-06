const path = require('path')
const http = require('http')
const express = require('express')
const socketIO = require('socket.io')
const publicPath = path.join(__dirname, '../public')
console.log(publicPath)

const port = process.env.PORT || 3000

const app = express()
let server = http.createServer(app) // create a server ourselves so we can add socket.io
let io = socketIO(server)
app.use(express.static(publicPath))

io.on('connection', (socket) => {
    console.log('New user connected')
    socket.on('disconnect', () => {
        console.log('Hello Client Say GoodBye')
    })
})












server.listen(port, () => {
    console.log(`Server is up on ${port}`)
})