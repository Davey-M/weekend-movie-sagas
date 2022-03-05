import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

// mui imports
import { Button } from '@mui/material';

function Details() {
    const history = useHistory();
    const dispatch = useDispatch();

    const id = useParams().id;

    const movie = useSelector((store) => store.currentMovie);

    const goBack = () => {
        // reset the current movie
        dispatch({
            type: 'SET_CURRENT_MOVIE',
            payload: {},
        });
        history.push('/');
    };

    return (
        <>
            <Button variant='contained' onClick={goBack}>
                Home
            </Button>
            <h1>Details for {JSON.stringify(movie)}</h1>
        </>
    );
}

export default Details;
