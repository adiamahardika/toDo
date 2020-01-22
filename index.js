let express = require("express")
let bodyParser = require("body-parser")
let app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.set("view engine", "ejs")

app.use(express.static("public"))

let task = []

let complete = []

app.post("/addtask", function(req,res) {
    console.log(req.body)
    let newTask = req.body.newtask
    task.push(newTask)
    res.redirect("/")
})

app.post("/removetask", function(req, res) {
    let completeTask = req.body.check

    if (Array.isArray(completeTask)) {
        for (var i = 0; i < completeTask.length; i++) {
            complete.push(completeTask[i])
            task.splice(task.indexOf(completeTask[i]), 1)
        }
    } else {
        complete.push(completeTask)
        task.splice(task.indexOf(completeTask[i]), 1)
    }

    res.redirect("/")
    
})

app.get("/", function(req, res) {
    res.render("index", {task: task, complete : complete})
}) 

app.listen(1500, function() {
    console.log("Server is running on port 1500")
})