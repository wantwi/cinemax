import React, { useEffect, useState } from "react";
import "./App.css";
import FilterButton from "./component/FilterButton";
import MovieComponet from "./component/movieComponet";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [pouplar, setPopular] = useState([]);
  const [moviewList, setMovieList] = useState([]);
  const [activeBtn, setActiveBtn] = useState(0);

  const fetchPopular = async () => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_APIKEY}`
      );
      const movies = await data.json();

      setPopular(movies.results);
      setMovieList(movies.results);
    } catch (error) {
      console.error({ error });
    }
  };

  useEffect(() => {
    fetchPopular();
  }, []);

  return (
    <div className="App">
      <FilterButton
        activeBtn={activeBtn}
        setActiveBtn={setActiveBtn}
        pouplar={pouplar}
        setMovieList={setMovieList}
      />
      <motion.div layout className="movie-card">
        <AnimatePresence>
          {moviewList.map((movie, indx) => (
            <MovieComponet key={indx} movie={movie} />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default App;
