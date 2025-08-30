const express = require("express");
const router = express.Router();
const { getAllNews, getNewsById } = require("../controllers/newsController");
const optionalAuth = require('../middlewares/optionalAuth');


router.get("/", optionalAuth, getAllNews);
router.get("/:id", optionalAuth, getNewsById);

module.exports = router;
