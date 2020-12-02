export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    //Remove the token after debugging
    //token: 'BQCJSCX9XvcyZwnHPWgfyFlAbElP7LRO1kF9X3O8lZ_NcFfnYtm-i547ML5M7RmPVZ7WupWroMnzLTytymR16QVF31kEi2B9PyL6mkqJDKuxl5s6_VJKXGyAfuCOpTzcn9E4Pk7Xb4U5XCsgGI8qm3a_jyOY373uXcXAhVxbMQfwL2pyNNyt'
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
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            }
        default:
            return state;
    }
}

export default reducer;