import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

import './Details.css';

// mui imports
import { Button, Paper, Chip, Backdrop } from '@mui/material';

function Details() {
    const history = useHistory();
    const dispatch = useDispatch();

    const [showPoster, setShowPoster] = useState(false);

    // id of the current movie
    const id = useParams().id;

    // current movie is an array to deal with the multiple genres
    const movie = useSelector((store) => store.currentMovie);
    const genres = useSelector((store) => store.genres);

    // go back to homepage
    // this will eventually be replaced by a header with nav bar
    const goBack = () => {
        history.push('/');
    };

    useEffect(() => {
        dispatch({ type: 'GET_CURRENT_MOVIE', payload: id });
    }, []);

    return (
        <>
            <Button variant='contained' onClick={goBack}>
                Home
            </Button>
            <div className='detail-container'>
                {movie[0] && (
                    <>
                        <h1>{movie[0].title}</h1>
                        <Paper className='container-paper'>
                            <div className='about-container'>
                                <img
                                    src={movie[0].poster}
                                    alt={movie[0].title + ' Poster'}
                                    width='200'
                                    onClick={() => setShowPoster(true)}
                                />
                                <p>{movie[0].description}</p>
                            </div>
                        </Paper>
                        <div className='genre-footer'>
                            <p>Genres:</p>
                            {genres.map((item, index) => {
                                return (
                                    <Chip
                                        key={index}
                                        variant='filled'
                                        label={item.name}
                                    />
                                );
                            })}
                        </div>
                    </>
                )}
            </div>
            <Backdrop open={showPoster} onClick={() => setShowPoster(false)}>
                {movie[0] && (
                    <img
                        src={movie[0].poster}
                        alt={movie[0].title + ' Poster'}
                        width='400'
                    />
                )}
            </Backdrop>
        </>
    );
}

export default Details;
