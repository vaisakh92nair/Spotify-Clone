export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null
};

const reducer = (state, action) => {
    console.log(action);

// Action has a type and payload
// ...state means keep everything in the current state and update the user with whatever is in the actions user
    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        default:
            return state;
    }
}

export default reducer;