import axios from "axios";
import { put } from "redux-saga/effects";

function* getCurrentMovie(action) {
    try {

        // get current movie info
        const response = yield axios.get(`/api/movie/${action.payload}`)
        yield put({
            type: 'SET_CURRENT_MOVIE',
            payload: response.data,
        })

        // get genres for current movie
        const genreRes = yield axios.get(`/api/genre/${action.payload}`)
        yield put({
            type: 'SET_GENRES',
            payload: genreRes.data,
        })
    } catch (err) {
        console.error('Error in getCurrentMovie saga', err);
    }
}

export default getCurrentMovie;