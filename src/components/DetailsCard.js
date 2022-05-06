import React from 'react'

export const DetailsCard = ({ movie, title, poster_path, overview, vote_average }) => {
    return (
        <>
            <div className="movie-info2">
                <h3>{title}</h3>
                <span className = 'rating2'>{vote_average}</span>
        </div>

        <div className="movie-over">
            <h2>Overview:</h2>
            <p>{overview}</p>
        </div>
        </>
    )
}
