import React, { useState, useEffect } from 'react'
import { MovieCard } from './MovieCard';

const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?api_key=4082c387bb30f7caf1f87b3869731097&page=1"

export const PopularMovies = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch(FEATURED_API)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setMovies(data.results);
            });
    }, []);
    return (
        <div className="movie-container">
            {movies.length > 0 &&
                movies.map((movie) => <MovieCard key = {movie.id} {...movie} />)}
        </div>
    )
}

