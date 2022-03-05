import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

// mui imports
import { Button } from '@mui/material';

function Details() {
    const history = useHistory();
    const dispatch = useDispatch();

    const [selectedMovie, setSelectedMovie] = useState({});
    const id = useParams().id;

    const movies = useSelector((store) => store.movies);
    if (movies.length === 0) {
        dispatch({ type: 'FETCH_MOVIES' });
    }

    return (
        <>
            <Button variant='contained' onClick={() => history.push('/')}>
                Home
            </Button>
            <h1>Details for {JSON.stringify(selectedMovie)}</h1>
        </>
    );
}

export default Details;
