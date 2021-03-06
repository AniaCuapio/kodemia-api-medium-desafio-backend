const express = require('express')
const { request, response } = require('express')
const cors = require('cors')
const app = express()

const entriesRouter = require('./src/routes/entries')
const writersRouter = require('./src/routes/writers')

const authRouter = require('./src/routes/auth') 

//Este es un middleware
app.use(express.json())

//Aqui se monta el enrutador montado XD
app.use('/entries', entriesRouter)

app.use(cors())

app.use('/writers', writersRouter)

app.use('/', authRouter)

app.get('/', (request, response) => {
  response.json({
    success: true,
    message: 'Medium API',
  })
})

module.exports = app
