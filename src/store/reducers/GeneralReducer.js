import * as actionType from "../actions/types";

export const INITIAL_STATE = {
    loading: true
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
    case actionType.SET_LOADING:
        return {
            ...state,
            loading: !state.loading
        };
    default:
        return state;
    }
};

export default reducer;
