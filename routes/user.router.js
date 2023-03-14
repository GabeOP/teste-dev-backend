const express = require("express");
const router = express.Router();

const Controller = require("../controllers/client.controller");
router.get("/", Controller.get)
router.get("/:email", Controller.getByEmail)
router.post("/", Controller.post)
router.patch("/:_id", Controller.patch)

module.exports = router