const Movie = require('../Model/movieModel');
const mongoose = require('mongoose');
const { spawn } = require('child_process');

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
        console.log(typeof (movies));

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

exports.recommend = async (req, res) => {
    try {
        const id = req.params.id;
        var dataToSend;
        var obj;
        const python = spawn('python', ['main.py',id]);
        python.stdout.on('data', function (data) {
            console.log('Pipe data from python script ...');
            dataToSend = data.toString();
        });

        python.on('close', (code) => {
            console.log(`child process close all stdio with code ${code}`);
            console.log(dataToSend);
            res.status(200).json({
                status: 'success',
                data: {
                    dataToSend
                },
            });
        });

    }
    catch (err) {
        console.log(err);
    }


}

exports.getRecData = async (req, res) => {

    try {
        const movie1 = await Movie.findById(req.params.id1)
        const movie2 = await Movie.findById(req.params.id2)
        const movie3 = await Movie.findById(req.params.id3)
        const movie4 = await Movie.findById(req.params.id4)
        const movie5 = await Movie.findById(req.params.id5)

        res.status(200).json({
            status: 'success',
            data: {
                movie1,
                movie2,
                movie3,
                movie4,
                movie5
            },
        });
    }
    catch (err){
        console.log(err);
    }
    


}
