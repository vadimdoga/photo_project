const mongoose = require('mongoose')
const Schema = mongoose.Schema

let gallerySchema = new mongoose.Schema({
  imageUrl: String,
  imageName: String
})

module.exports = mongoose.model('Gallery', gallerySchema)
