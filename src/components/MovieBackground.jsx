import { Link } from "react-router-dom"

function MovieBackground({movie}) {
  return (
    <div className="movieBackground">
        <Link to="/"><div className="mt-24 ml-5 w-[4em] rounded-lg text-center text-xl py-2 px-5 bg-[#fff] text-[#222]">Back</div></Link>
        <div className="flex flex-col justify-center items-center pt-[1em] pb-[3em] md:flex-row md:justify-center md:items-center md:px-20 md:py-[1em] text-[#fff] gap-10">
            <img src={movie.posterURL} alt={movie.title} className="rounded"/>
            <div className=" px-3 md:h-full flex flex-col gap-5 md:w-[20rem] items-start">
                <h1 className="text-4xl font-extrabold">{movie.title}</h1>
                <div className="genres flex gap-3">
                    {movie.genre.map((g, index) => {
                        return <div className="genreBox px-5 py-1 border-2 rounded-3xl hover:ring-brandOrange" key={index}>{g}</div>
                    })}
                </div>
                <div>{movie.description}</div>
            </div>
        </div>
    </div>
  )
}

export default MovieBackground