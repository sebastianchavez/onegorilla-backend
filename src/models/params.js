'user strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const paramsSchema = new Schema({
  name: String,
  email: String,
  valN: String,
  valM: String,
  result: Boolean
})

module.exports = mongoose.model('Params', paramsSchema)
