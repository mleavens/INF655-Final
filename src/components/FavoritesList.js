import React, { useContext } from 'react';
import {GlobalContext} from '../context/GlobalState';
import {FavMovieCard} from './FavMovieCard';
import {MovieCard} from './MovieCard';



export const FavoritesList = () => {
    const { favoriteslist } = useContext(GlobalContext);


    return (
        <div className = "movie-page">
            <div className="fav-container">
                <div className="header">
                    <h1 className="heading">My Favorites</h1>
                </div>
                {favoriteslist.length > 0 ? (
                    <div className="movie-grid">
                    {favoriteslist.map((movie) => (
                        <FavMovieCard movie={movie} type = 'favoriteslist' />
                    ))}
                </div>
                ) : (
                    <h2 className = 'no-movies'> No movies in your favorites list</h2>
                )}
                
            </div>
        </div>
    )
}


