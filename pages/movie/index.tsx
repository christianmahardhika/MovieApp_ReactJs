import MovieComponent from "./components/MovieComponent";
import React,{useEffect, useState} from "react";
import styled from 'styled-components';

export default function Movie() {
  const API_KEY="95e87c5acbcfa3a1b0d4df3e1a73755b"
  const FEATURED_API="https://api.themoviedb.org/3/discover/movie?api_key="+API_KEY+"&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"
  const SEARCH_API="https://api.themoviedb.org/3/search/company?api_key="+API_KEY+"&query="

  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(FEATURED_API).then(res=>res.json()).then((data)=>{console.log(data); setMovies(data.results)})
  })
  return (<div>
    <h1>React Movie Apps</h1>
    <MovieContainer>
    {movies.length > 0 && movies.map((movie) => 
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
  
