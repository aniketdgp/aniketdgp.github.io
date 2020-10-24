const express = require("express")
const app = express()
const path = require('path')

app.set('view engine','html')


//setting dir address
const dir = path.join(__dirname,"../")
const ui = path.join(__dirname,"../")

//setting the directory for use
app.use(express.static(dir))
app.set('views',ui)

app.get("/",(req,res)=>{
    res.render("index")
})


app.listen(3000,()=>{
    console.log("Server started at localhost:3000")
})