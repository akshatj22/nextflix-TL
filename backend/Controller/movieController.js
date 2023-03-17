const Movie = require('../Model/movieModel');
const mongoose = require('mongoose');

// Get all movies
exports.getAllMovies = async (req, res) => {
    try {
        const movies = await Movie.find();

        res.status(200).json({
            status: 'success',
            results: movies.length,
            data: {
                movies,
            },
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err,
        });
    }
}

// Get a movie
exports.getMovie = async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);

        res.status(200).json({
            status: 'success',
            data: {
                movie,
            },
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err,
        });
    }
}

//GetTwentyMovies
exports.getTwentyMovies = async (req, res) => {
    try {
        const movies = await Movie.find().limit(20);

        res.status(200).json({
            status: 'success',
            results: movies.length,
            data: {
                movies,
            },
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err,
        });
    }
}
