'use strict'

const express = require('express')

const api = express.Router()
const paramsCrtl = require('../controllers/params')

// params
api.get('/params', paramsCrtl.getAll)
api.post('/save', paramsCrtl.save)

module.exports = api
