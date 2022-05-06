import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const ResultCard = ({movie}) => {
    const { addMovieToFavorites, favoriteslist } = useContext(GlobalContext);

    let storedMovie = favoriteslist.find(o => o.id === movie.id);

    const favoriteslistDisabled = storedMovie ? true : false;

    return (
        <div className="result-card">
            <div className="poster-wrapper">
                {movie.poster_path ? (
                <img src = {`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt = {`${movie.title} Poster`}/>
                ) : (
                    <div className = 'filler-poster'></div>
                )}
            </div>

            <div className="info">
                <div className="header">
                    <h3 className="title">{movie.title}</h3>
                        <h4 className="release-date">
                        {movie.release_date ? movie.release_date.substring(0,4) : "-"}
                        </h4>
                    <h5 className="result-rating">{movie.vote_average}</h5>
                </div>

                <div className="controls">
                    <button 
                        className="btn"
                        disabled ={favoriteslistDisabled}
                        onClick ={() => addMovieToFavorites(movie)}>
                        Add to favorites
                    </button>
                </div>
            </div>
        </div>
    )
}
