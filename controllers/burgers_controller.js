const router = require("express").Router();
const burger = require("../models/burger");

router.get("/burgers", burger.getBurgers)
router.post("/burgers/:burgerName", burger.addBurger)
router.put("/burgers/:burgerName", burger.eatBurger)

module.exports = router