import MovieBackground from "../components/MovieBackground"
import Trailers from "../components/Trailers"
import { useParams } from "react-router-dom"
import data from "../data.json"

export default function MoviePage() {
    const { id } = useParams();
    console.log(id);
    const movie = data.movies.find(m => m.id == id);
    console.log(movie);

    return (
        <div className="">
            <MovieBackground movie={movie}/>
            <Trailers src={movie.src}/>
        </div>

    )
}