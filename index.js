require('dotenv').config()

const express = require('express')

const app = express()
const port = 4000
// url creating

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send("virednra")
})
 
app.get('/login',(req,res)=>{
    res.send('<h1>Hello virendra complete backed<h1>')
})
app.get('/youtube',(req,res)=>{
    res.send('<h2>hello Chai or code <h2>')
})
// url creating ending
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})

