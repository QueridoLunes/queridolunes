import axios from "axios";
import * as actionTypes from "./types";


// ---------------- CHECK AUTH ------------------------------

export const setLoading = () => {
    return {
        type: actionTypes.SET_LOADING
    };
};

// ---------------- GET MEDIUM POST ------------------------------

export const getPosts = () => async (dispatch) => {
    axios
        .get("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@queridolunes")
        .then((response) => {
            dispatch({
				type: actionTypes.SET_POSTS,
				payload: response.data.items,
			});
        })
        .catch((error) => {
            console.log({error});
        });
}

