const moment = require('moment-timezone')
const Article = require('../models/Article')
const errorHandler = require('../utils/errorHandler')

//const dateNow = Date.now()
const mainDate = moment().tz("Europe/Moscow");

// function convertTZ(date, tzString) {
//     return new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("ru-RU", {timeZone: tzString}));   
// }

// // const convertedDate = convertTZ("2012/04/10 10:10:30 +0000", "Europe/Moscow") 
// // convertedDate.getHours();

// const dateNow = new Date().getTime


module.exports.getAll = async function(req, res) {
    try {
        const articles = await Article.find({user: req.user.id})
        res.status(200).json(articles)
    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.getById = async function(req, res) {
    try {
        const article = await Article.findById(req.params.id)
        res.status(200).json(article)
    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.remove = async function(req, res) {
    try {
        await Article.remove({_id: req.params.id})
        res.status(200).json({
            message: 'Статья удалена.'
        })
    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.create = async function(req, res) {
    const article = new Article({
        title: req.body.title,
        subtitle: req.body.subtitle,
        description: req.body.description,
        firstName: req.body.firstName,
        date: req.body.date ? req.body.date : mainDate.format(),
        user: req.user.id,
        status: 0,
        imageSrc: req.file ? req.file.path : ''
    })
    try {
        await article.save()
        res.status(201).json(article)
    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.update = async function(req, res) {
    const updated = {
        title: req.body.title
    }

    if(req.file) {
        updated.imageSrc = req.file.path
    }
    
    try {
        const article = await Article.findOneAndUpdate(
            {_id: req.params.id},
            {$set: updated},
            {new: true}
        )
        res.status(200).json(article)
    } catch (e) {
        errorHandler(res, e)
    }
}