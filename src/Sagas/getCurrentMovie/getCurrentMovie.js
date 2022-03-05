import axios from "axios";
import { put } from "redux-saga/effects";

function* getCurrentMovie(action) {
    try {
        const response = yield axios.get(`/api/movie/${action.payload}`)
        yield put({
            type: 'SET_CURRENT_MOVIE',
            payload: response.data,
        })
    } catch (err) {
        console.error('Error in getCurrentMovie saga', err);
    }
}

export default getCurrentMovie;