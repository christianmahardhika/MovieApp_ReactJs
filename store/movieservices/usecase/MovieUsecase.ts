import React, { useState, useEffect } from "react";
import MovieRepository from "../repository/MovieRepository";
import { Movie } from "../repository/response";

export default new class MovieUsecase {
    getMovies() {
        const [movies, setMovies] = useState<[Movie]>();
        useEffect(() => {
            MovieRepository.DiscoverMovies().then(res => setMovies(res.results))
        }, [])
        return movies
    }
}
