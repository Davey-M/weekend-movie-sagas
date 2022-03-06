import { Select, TextField, Button, MenuItem, Menu } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import './MovieForm.css';

function MovieForm() {
    const dispatch = useDispatch();
    const history = useHistory();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [poster, setPoster] = useState('');
    const [genre, setGenre] = useState(0);

    const genres = useSelector((store) => store.genres);

    const handleSubmit = (e) => {
        e.preventDefault();

        const postData = {
            title,
            description,
            poster,
            genre_id: genre,
        };

        axios
            .post('/api/movie', postData)
            .then((response) => {
                setTitle('');
                setDescription('');
                setPoster('');
                setGenre('');
            })
            .catch((err) => {
                console.error('Error in post MovieForm()', err);
            });
    };

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
                console.error('Error in MovieForm()', err);
            });
    }, []);

    return (
        <>
            <h1>Add Movie</h1>
            <form onSubmit={handleSubmit} className='add-movie-form'>
                <TextField
                    label='Movie Title'
                    variant='outlined'
                    required
                    className='form-field'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <TextField
                    label='Movie Description'
                    variant='outlined'
                    rows={5}
                    className='form-field'
                    required
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <TextField
                    label='Movie Poster Link'
                    variant='outlined'
                    className='form-field'
                    required
                    value={poster}
                    onChange={(e) => setPoster(e.target.value)}
                />
                <div className='button-container'>
                    <p>Select Genre</p>
                    <Select
                        label=''
                        labelId='genre-label'
                        required
                        className='select'
                        value={genre}
                        onChange={(e) => setGenre(e.target.value)}
                    >
                        {genres.map((item) => {
                            return (
                                <MenuItem value={item.id}>{item.name}</MenuItem>
                            );
                        })}
                    </Select>
                    <Button type='submit' variant='contained'>
                        Add Movie
                    </Button>
                </div>
            </form>
        </>
    );
}

export default MovieForm;
