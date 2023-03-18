import React, { useEffect } from "react";
import NavBar from "../Layouts/Navbar";
import Container from "../Layouts/Container";
import MovieCard from "../components/Movies/MovieCard";
import { useState } from "react";
import tmdb from "../api/tmdb";
import backend from "../api/backend";
import { Outlet, useParams, Link } from "react-router-dom";

const getPosterURL = (posterpath) => {
    return `https://www.themoviedb.org/t/p/w220_and_h330_face${posterpath}`
}

const Movie_Card = () => {

    const params = useParams();
    const movie_id = params.id;
    const [movie, setMovie] = useState("");
    const [rec, SetRec] = useState("");
    const [recData, SetRecData] = useState("");
    const [poster_path, setPoster] = useState("");

    useEffect(() => {
        (async () => {
            const data = await backend.get(`/movie/getMovie/${movie_id}`);
            setMovie(data.data.data.movie);
        })();
    }, [])

    // console.log(movie);
    // console.log(rec);


    async function getPoster() {
        const m_data = await tmdb.get(`/movie/${movie.id}`)
        const poster = await m_data.data.poster_path;
        setPoster(poster);
    }
    getPoster();

    let genres_arr = []
    if (movie.genres != undefined) {
        const arr = movie.genres.slice(1, -1).split("},");
        // console.log(arr);
        for (let index = 0; index < arr.length; index++) {
            if (index != arr.length - 1) {
                genres_arr.push(JSON.parse(arr[index] + "}").name);
                // console.log(JSON.parse(arr[index]+"}").name);
            }
            else {
                genres_arr.push(JSON.parse(arr[index]).name);
                // console.log(JSON.parse(arr[index]).name);
            }
        }
    };

    useEffect(() => {
        (async () => {
            const recom = await backend.get(`/movie/recommend/${movie._id}`);
            SetRec(recom.data.data);
        })();
    }, [movie]);

    let rec_str;
    let rec_JSON;
    if (rec.dataToSend != undefined) {
        rec_str = rec.dataToSend.replace(/'/g, "\"");
        rec_JSON = JSON.parse(rec_str);
        // console.log(rec_JSON);
    }

    useEffect(() => {
        (async () => {
            const new_data = await backend.get(`/movie/getrecdata/${rec_JSON[0]}/${rec_JSON[1]}/${rec_JSON[2]}/${rec_JSON[3]}/${rec_JSON[4]}`);
            SetRecData(new_data);
        })();
    }, [rec]);

    let recArray = [];
    if (recData.data != undefined) {
        console.log(recData.data);
        for (let index = 1; index < 6; index++) {
            recArray.push(recData.data.data[`movie${index}`]);

        }
    }
    console.log(recArray);



    return <div style={{ position: 'absolute' , justifyContents:'center' }} className="flex flex-col  pl-5 gap-2 h-full w-[1310px]">
        <div style={{ height: '100%', width: '100%', position: 'relative', paddingTop: '20px', left: '0', paddingLeft: '20px' }}>
            <div style={{}}>
                <img src={getPosterURL(poster_path)} style={{}} className="w-[300px] h-[400px] shadow-sm rounded-[0.5rem] pt-10" />
            </div>

        </div>
        <div style={{ height: '100%', width: '100%', position: 'relative', paddingTop: '20px', right: '0', paddingRight: '50px', paddingLeft: '25px' }}>
            {/* <div style={{paddingTop:'50px'}}> */}

            <h1 style={{ textAlign: 'left', alignContents: 'center', fontSize: '50px', position: 'relative' }} className="font-bold text-lightRed  ">{movie.title}</h1>
            <p style={{ textAlign: 'justify', fontSize: '20px', position: 'relative', marginTop: '0' }} className="font-normal text-slate-500">{movie.release_date}</p>
            <p style={{ color: "white" }}>{movie.tagline}</p>
            <p style={{ color: "white" , fontWeight:'bold'}}>Popularity : {movie.vote_average * 10}%</p>
            <p style={{color:'white' ,fontSize:'25px' , fontWeight:'bold'}}>Genre:</p>
            {movie.genres != undefined && <p style={{ color: "white" }}>{genres_arr.toString()}</p>}
            <p style={{ textAlign: 'left', fontSize: '25px', paddingTop: '10px' }} className="text-lightRed">Overview :</p>
            <p style={{ color: "white" }}>{movie.overview}</p>
            <br />

            {movie.budget > 0 && <p style={{ color: "white" }}>Budget: $ {movie.budget}</p>}
            {movie.revenue > 0 && <p style={{ color: "white" }}>Revenue: $ {movie.revenue}</p>}
           

            
            <h1 style={{color:"white", fontSize:"50px", fontWeight:'semi-bold', paddingTop:'30px', paddingBottom:'30px'}}>Recommended Movies</h1>
            <div style={{display: "flex", flexDirection:"row"}}>
                {recData.data != undefined &&
                    recArray.map((movie) => (
                        <Link reloadDocument to={`/movie/${movie._id}`}><MovieCard id={movie.id} title={movie.title} release_date={movie.release_date} /></Link>
                    ))
                }
            </div>


        </div>
    </div>

}

// export default Movie_Card;



function Movie() {




    return (
        <div>
            <NavBar />
            <Container >
                {/* <h1 style={{ color: 'white' }}>Hello World!</h1> */}
                <Movie_Card>
                    {/* <p style={{color:'white'}}>Overview</p> */}
                </Movie_Card>
            </Container>
            <Outlet />
        </div>


    )
}

export default Movie;