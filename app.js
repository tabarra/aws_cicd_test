const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send(`Hello world from this deployment: ${process.env.DUDE123}\t${process.env.AWS_REGION}`);
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
