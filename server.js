const express = require("express");
const bodyParser = require("body-parser");

const orm = require('./config/orm');

orm.selectAll()