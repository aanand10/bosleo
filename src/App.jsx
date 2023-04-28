import { useState } from "react";
import "./Styles/App.css";
import Navbar from "./Components/Navbar";
import MovieTitle from "./Components/MovieTitle";
import ThumbnailGraph from "./Components/ThumbnailGraph";
import MovieProperties from "./Components/MovieProperties";
import Insights from "./Components/Insights";
import AllMovies from "./Components/AllMovies";
import Footer from "./Components/Footer";
import Trial from "./Components/Trial";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar></Navbar>
      <MovieTitle></MovieTitle>
      <ThumbnailGraph></ThumbnailGraph>
      <MovieProperties></MovieProperties>
      <Insights></Insights>
      <AllMovies></AllMovies>
      <Footer></Footer>
      {/* <Trial></Trial> */}
    </div>
  );
}

export default App;
