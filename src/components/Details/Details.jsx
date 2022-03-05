import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

// mui imports
import { Button, useStepContext } from '@mui/material';

function Details() {
    const history = useHistory();
    const dispatch = useDispatch();

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
            {movie[0] && (
                <>
                    <h1>{movie[0].title}</h1>
                    <div className='about-container'>
                        <img
                            src={movie[0].poster}
                            alt={movie[0].title + ' Poster'}
                        />
                        <p>{movie[0].description}</p>
                    </div>
                    <div className='genre-footer'>
                        {genres.map((item, index) => {
                            return <p key={index}>{item}</p>;
                        })}
                    </div>
                </>
            )}
        </>
    );
}

export default Details;
