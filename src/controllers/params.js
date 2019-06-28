'use strict'

const Params = require('../models/params')

const getAll = (req, res) => {
  try {
    Params.find((err, params) => {
      if (err) return res.status(500).send({ message: `Error: ${err.message}` })
      return res.status(200).json(params)
    })
  } catch (err) {
    return res.status(500).send({ message: `Error: ${err.message}` })
  }
}

const save = (req, res) => {
  try {
    const newParam = new Params()
    newParam.name = req.body.name
    newParam.email = req.body.email
    newParam.valN = req.body.valN
    newParam.valM = req.body.valM
    newParam.result = req.body.result
    newParam.save(err => {
      if (err) return res.status(500).send({ message: `Error: ${err.message}` })
      return res.status(200).send({ message: 'Parámetro agregado con éxito' })
    })
  } catch (err) {
    return res.status(500).send({ message: `Error: ${err.message}` })
  }
}

module.exports = {
  getAll,
  save
}
