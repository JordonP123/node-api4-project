const express = require('express')
require('dotenv').config()
const cors = require('cors')

const server = express()

server.use(express.json())
server.use(cors())

const port = process.env.PORT || 9000

server.get('/api/users', (req, res) => {
    res.json([{
        name: "jordon1",
        id: 1,
    }, {
        name: "jordon2",
        id: 2,
    }, {
        name: "jordon3",
        id: 3,
    }, {
        name: "jordon4",
        id: 4,
    }])
})

server.post('/api/register', (req, res) => {
    try {
        res.status(201).json({ username: 'Hello', password: 'World' })
    } catch {
        res.status(500).json({
            message: 'Could not register, try again'
        })
    }
})

server.post('/api/login', (req, res) => {
   try{ if(req.body.username && req.body.password){
        res.json({ welcomeMessage: "Welcome!!"})
    } else {
        res.status(404).json({ noLol: "try again sucka"})
    }} catch {
        res.status(500).json({message: "could not login"})
    }
})

server.listen(port, () => {
    console.log(`server running on port ${port}`)
})


