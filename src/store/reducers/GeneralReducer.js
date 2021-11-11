import * as actionType from "../actions/types";

export const INITIAL_STATE = {
    loading: true,
    posts:[]
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
    case actionType.SET_LOADING:
        return {
            ...state,
            loading: !state.loading
        };
    case actionType.SET_POSTS:
        return {
            ...state,
            posts: action.payload
        };
    default:
        return state;
    }
};

export default reducer;
