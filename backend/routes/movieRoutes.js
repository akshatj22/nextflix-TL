const express = require("express");
const movieController = require("./../Controller/movieController");

const router = express.Router();

router.get("/getMovies", movieController.getTwentyMovies);
router.get("/getMovie/:id", movieController.getMovie);
router.get("/recommend/:id",movieController.recommend);
router.get("/getrecdata/:id1/:id2/:id3/:id4/:id5",movieController.getRecData);

module.exports = router;