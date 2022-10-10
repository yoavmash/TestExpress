const express = require('express')

const app = express()
const port = process.env.port || 3000

app.get('', (req, res) => {
    res.send('Hello express!')
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})


