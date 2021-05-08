const mongoose = require('mongoose')
const Schema = mongoose.Schema

const articleSchema = new Schema({
    imageSrc: {
        type: String,
        default: ''
    },
    title: {
        type: String,
        required: true
    },
    subtitle: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    date : {
        type: Date,
        default: Date.now
    },
    user: {
        ref: 'users',
        type: Schema.Types.ObjectId
    },
    status: {
        type: Number,
        default: 0
    }
})

module.exports = mongoose.model('articles', articleSchema)