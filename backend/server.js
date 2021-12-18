const connectToMongo = require("./db");
const express = require('express')
connectToMongo();
var cors = require('cors')

const app = express()
const port = 5000

app.use(cors())
app.use(express.json())
app.use('/api/repo',require('./routes/repo'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})