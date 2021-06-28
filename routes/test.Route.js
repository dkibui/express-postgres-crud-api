const express = require("express")
const router = express.Router()

const users = require("../test/test.data.js")

router.get("/", (req, res) => {
  res.status(200).send(users)
})

module.exports = router
