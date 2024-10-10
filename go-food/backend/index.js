const express = require('express')
const mongoDB = require('./Dtbs')


const app = express()
const port = 5000

mongoDB();
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(express.json() )
app.use('/api', require("./routes/CreateUser"))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
