const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    sl: {
        type: String,
    },
    budget: {
        type: String,
    },
    genres: {
        type: String,
    },
    homepage: {
        type: String,
    },
    id: {
        type: String,
    },
    keywords: {
        type: String,
    },
    original_language: {
        type: String,
    },
    original_title: {
        type: String,
    },
    overview: {
        type: String,
    },
    popularity: {
        type: String,
    },
    production_companies: {
        type: String,
    },
    production_countries: {
        type: String,
    },
    release_date: {
        type: String,
    },
    revenue: {
        type: String,
    },
    runtime: {
        type: String,
    },
    spoken_languages: {
        type: String,
    },
    status: {
        type: String,
    },
    tagline: {
        type: String,
    },
    title: {
        type: String,
    },
    vote_average: {
        type: String,
    },
    vote_count: {
        type: String,
    },
    movie_id: {
        type: String,
    },
    cast: {
        type: String,
    },
    crew: {
        type: String,
    },
});

module.exports = mongoose.model('Movie', movieSchema, "movie");