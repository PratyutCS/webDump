let Express = require('express')
let path = require('path')

let app = new Express()
app.use(Express.static(__dirname + '/public/css'));
app.use(Express.static(__dirname + '/public/images'));
app.use(Express.static(__dirname + '/public/js'));
app.use(Express.static(__dirname + '/public/json'));
app.use(Express.static(__dirname + '/public/music'));

let htmlfolder = path.join(__dirname, "/public/html")

app.get("/", (req, res) => {
    res.sendFile(path.join(htmlfolder, "index.html"))
})

app.get("/player", (req, res) => {
    res.sendFile(path.join(htmlfolder, "musicPlayer.html"))
})

app.get("*", (req, res) => {
    res.sendFile(path.join(htmlfolder, "error.html"))
})

app.listen("80", () => {
    console.log("Server is running")
})