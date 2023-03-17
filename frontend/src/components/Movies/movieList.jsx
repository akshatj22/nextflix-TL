import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { request } from "../../api/request";
import Blur from "../../baseUI/blur";
import backend from "../../api/backend";

const MovieList = () => {
    const [movies, setMovies] = useState("")

    useEffect(() => {
        (async () => {
            const data = await backend.get("/movie/getMovies");
            setMovies(data.data.data.movies)
        })();
    }, [])

    return (
        <>
        <h1 style={{color: "#fff",fontSize:"36px",padding:"15px 0"}}>What's Popular?</h1>
        <div className="flex pb-5 pr-9 pl-5 overflow-x-auto">
                {   movies.length === 20 &&
                    movies.map((movie) => (

                        <MovieCard id={movie.id} title={movie.title} release_date={movie.release_date}/>
                    ))
                }
            

            <div className="absolute top-0 right-0 w-16 h-full">
                <Blur />
            </div>
        </div>
        </>
    )
}

export default MovieList;