import React from 'react'
import { DetailsCard } from './DetailsCard'
import { MovieCard } from './MovieCard'

export const FavMovieCard = ( {movie, type} ) => {
    return (
        <div className="fav-movie-card">
            <div className="movie-info2">
                {movie.poster_path ? (
                    <img 
                        src= {`https://image.tmdb.org/t/p/w200${movie.poster_path}`} 
                        alt = {`${movie.title} Poster`}/>
                ) : (
                    <div className = 'filler-poster'></div>
                )}
                </div>
            </div>
    )
}
