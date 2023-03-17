const express = require("express");
const movieController = require("./../Controller/movieController");

const router = express.Router();

router.get("/getMovies", movieController.getTwentyMovies);

module.exports = router;