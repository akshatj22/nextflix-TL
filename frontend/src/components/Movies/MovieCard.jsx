import { useState } from "react";
import tmdb from "../../api/tmdb";
import { useNavigate } from "react-router-dom";


const getPosterURL = (posterpath) =>{
    return `https://www.themoviedb.org/t/p/w220_and_h330_face${posterpath}`
}


const MovieCard = ({ id,title,release_date }) => {
    
    const [poster_path, setPoster] = useState("");
    const navigate = useNavigate();
    
    async function getPoster(){
        const m_data = await tmdb.get(`/movie/${id}`)
        const poster = await m_data.data.poster_path;
        setPoster(poster);
    }
    getPoster();
    
    return <div className="flex flex-col  pl-5 gap-2 ">
        <img src={getPosterURL(poster_path)} alt={title} className="w-[150px] h-[225px] shadow-sm rounded-[0.5rem]" />
        <div className="flex flex-col px-3 w-[150px]">
            <h1 className="font-bold text-lightRed">{title}</h1>
            <p className="font-normal text-slate-500">{release_date}</p>
        </div>


    </div>
}

export default MovieCard;