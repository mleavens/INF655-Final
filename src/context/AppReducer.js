export default (state, action) => {
    switch(action.type){
        case 'ADD_MOVIE_TO_FAVORITES':
            return {
                ...state,
                favoriteslist:[action.payload, ...state.favoriteslist],
            }
        default:
            return state;
    }
}