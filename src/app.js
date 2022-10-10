const express = require('express')

const app = express()
const port = process.env.port || 3000

app.get('gi', (req, res) => {
    res.send('Hello express!')
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})


