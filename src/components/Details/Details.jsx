import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

// mui imports
import { Button } from '@mui/material';

function Details() {
    const history = useHistory();
    const dispatch = useDispatch();

    const id = useParams().id;

    const movie = useSelector((store) => store.currentMovie);

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
            <h1>Details for {JSON.stringify(movie[0])}</h1>
        </>
    );
}

export default Details;
