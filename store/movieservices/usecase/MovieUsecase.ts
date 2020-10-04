// Todo

import React,{useState} from "react";
import MovieRepository from "../repository/MovieRepository";
// import { BaseResponse } from "../repository/response";

export default function MovieUsecase() {
    const [movies, setMovies] = useState([]);
    MovieRepository.DiscoverMovies().then(res => { return setMovies(res.results);})
    return movies
}
