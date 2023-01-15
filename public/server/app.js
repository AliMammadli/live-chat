const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

app.get('/api', (req, res) => {
    res.json({ message: 'From api with love' })
})

app.listen(3001, () => { console.log('Server Started') })