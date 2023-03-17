import React from "react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import MovieList from "../components/Movies/movieList";
import Container from "../Layouts/Container";
import NavBar from "../Layouts/Navbar";

function Home() {
    return (
        <div>
        <NavBar/>
        <Header />
        <Container>
        <Banner />
        <MovieList />
        </Container>
        </div>
    )
}

export default Home;