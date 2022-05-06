import React, { createContext, useReducer, useEffect } from 'react';
import AppReducer from './AppReducer';

//initial state
const initialState = {
    favoriteslist: localStorage.getItem('favoriteslist')
    ? JSON.parse(localStorage.getItem('favoriteslist')) 
    : [],
};

//create context
export const GlobalContext = createContext(initialState);

//provider components
export const GlobalProvider = props => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    useEffect(()=> {
        localStorage.setItem('favoriteslist', JSON.stringify(state.favoriteslist));
        
    }, [state]);

    //actions
    const addMovieToFavorites = (movie) => {
        dispatch({type: 'ADD_MOVIE_TO_FAVORITES', payload: movie});
    }

    return (
        <GlobalContext.Provider 
        value ={{
            favoriteslist: state.favoriteslist, 
            addMovieToFavorites}}>
        {props.children}
        </GlobalContext.Provider>
    )
};