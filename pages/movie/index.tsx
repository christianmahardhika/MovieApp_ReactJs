import MovieComponent from "./components/MovieComponent";
import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import MovieUsecase from "../../store/movieservices/usecase/MovieUsecase";
// import MovieRepository from "../../store/movieservices/repository/MovieRepository"

export default function Movie() {
  // const SEARCH_API="https://api.themoviedb.org/3/search/company?api_key="+API_KEY+"&query="
  // const [movies, setMovies] = useState([]);
  // useEffect(() => {
  //   MovieRepository.DiscoverMovies().then(res => { console.log(res.results); setMovies(res.results)})
  //   })
  const moviess = MovieUsecase()
  console.log(moviess)
  return (<div>
    <h1>React Movie Apps</h1>
    <MovieContainer>
      {moviess.length > 0 && moviess.map((movie) =>
        (<MovieComponent {...movie} />)
      )}
    </MovieContainer>
  </div>)
}

const MovieContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

