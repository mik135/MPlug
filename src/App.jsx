import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import MoviePage from "./pages/MoviePage"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/movies/:id" element={<MoviePage />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App