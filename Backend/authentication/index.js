const express = require('express')
const app = express()
const env = require('dotenv')
const { router } = require('./Router/RouterV1/router.Js')

env.config()


app.use(express.json())
app.use('/',router)

app.listen(process.env.PORT||5050,()=>{
    console.log('App running on port 5050...')
})