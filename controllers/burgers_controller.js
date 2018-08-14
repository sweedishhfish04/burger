const router = require("express").Router();
const burger = require("../models/burger");

router.get("/burgers", burger.getBurgers)
router.put("/burgers/:burgerName", burger.addBurger)
router.post("/burgers/:burgerName", burger.eatBurger)

module.exports = router