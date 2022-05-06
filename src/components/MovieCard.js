import React from 'react'

const IMG_API = 'https://image.tmdb.org/t/p/w1280'

export const MovieCard = ( { movie, title, poster_path, overview, vote_average }) => (
        <div className="movie-card">
            <img src = {IMG_API + poster_path} alt={title} />
            <div className="movie-info">
                <h3>{title}</h3>
                <span className = 'rating'>{vote_average}</span>
        </div>

        <div className="movie-over">
            <h2>Overview:</h2>
            <p>{overview}</p>
        </div>
        </div>
    )