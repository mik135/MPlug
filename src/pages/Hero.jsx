import "../App.css"
import SwiperPage from "./SwiperPage"
import MovieList from "../components/MovieList"
import Filter from "../components/Filter"
import { useState } from "react"

function Hero() {
  const [rating, setRating] = useState(false);
  const [title, setTitle] = useState("");
  const [unfiltered, setUnFiltered] = useState(true);

  function handleFilterChange(e) {
    if(e.target.value == "rating") {
      setRating(true);
      setTitle(false);
    } else if (e.target.value == "title") {
      setTitle(true);
      setRating(false);
    } else if(e.target.value == "unfiltered") {
      setUnFiltered(true);
      setTitle(false);
      setRating(false);
    }
  }

  function handleRatingChange(e) {
    setRating(e.target.value);
    setUnFiltered(false);
    setTitle(false);
  }

  function handleTitleChange(e) {
    setTitle(e.target.value);
    setUnFiltered(false);
    setRating(false);
  }

  return (
    <main>
      <SwiperPage />
      <Filter rating={rating} title={title} handleFilterChange={handleFilterChange} handleRatingChange={handleRatingChange} handleTitleChange={handleTitleChange}/>
      <MovieList rating={rating} title={title} unfiltered={unfiltered}/>
    </main>
  )
}

export default Hero