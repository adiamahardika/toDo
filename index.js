let express = require("express")
let bodyParser = require("body-parser")
let app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.set("view engine", "ejs")

app.use(express.static("public"))

let task = []

app.post("/add", function(req,res) {
    console.log(req.body)
    let newTask = req.body.newtask

    task.push(newTask)
    res.redirect("/")
})

app.get("/", function(req, res) {
    res.render("index", {task: task})
}) 

app.listen(1500, function() {
    console.log("Server is running on port 1500")
})