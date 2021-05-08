const express = require('express')
const bodyParser = require('body-parser')
const app = require('./app')
const { urlencoded } = require('body-parser')
const controller = require('./controllers/auth')
const Article = require('./models/Article')
const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server has been started on ${port}`))

app.post('/register', controller.register, urlencoded, function(req, res) {
    if (!req.body) return res.sendStatus(400)
    console.log(req.body)
    res.render('index', {data: req.body});
});

app.post('/login', controller.login, urlencoded, function(req, res) {
    if (!req.body) return res.sendStatus(400)
    console.log(req.body)
    res.render('index', {data: req.body});
})

app.post('/', function(req, res) {
    controller.create
});

if (Article.status === 1) {
    app.get('/', controller.getAll, urlencoded, function(req, res) {
        if (!req.body) return res.sendStatus(400)
        console.log(req.body)
        res.render('index', {data: req.body});
    })
}
