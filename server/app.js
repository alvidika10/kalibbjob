if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const cors = require('cors')
const router = require('./route')
const errorhandler = require('./middlewares/errorHandler')


app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

app.use(router)
app.use(errorhandler)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})