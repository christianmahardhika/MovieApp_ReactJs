import MovieComponent from "../../components/MovieComponent/MovieComponent";
import React from "react";
import styled from 'styled-components';
import MovieUsecase from "./usecase/MovieUsecase";
import { Divider, Loader } from "semantic-ui-react";

export default function Movie() {
  const movies = MovieUsecase.getMovies()
  if (movies === undefined) {
    return (<Loader/>)
  } else {
    return (<div>
      <h1>React Movie Apps</h1>
      <MovieContainer>
        {movies.length > 0 && movies.map((movie) =>
          (<MovieComponent {...movie} />)
        )}
      </MovieContainer>
    </div>)
  }
}

const MovieContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

