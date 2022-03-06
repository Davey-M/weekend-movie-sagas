import axios from 'axios';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import GenreChip from '../GenreChip/GenreChip';

import './GenreList.css';

function GenreList() {
    const dispatch = useDispatch();

    const genres = useSelector((store) => store.genres);

    useEffect(() => {
        axios
            .get('/api/genre')
            .then((response) => {
                dispatch({
                    type: 'SET_GENRES',
                    payload: response.data,
                });
            })
            .catch((err) => {
                console.error('Error in GenreList()', err);
            });
    }, []);

    return (
        <>
            <h1>Genres</h1>
            <div className='genre-container'>
                {genres.map((item, index) => {
                    return <GenreChip key={index} {...item} />;
                })}
            </div>
        </>
    );
}

export default GenreList;
