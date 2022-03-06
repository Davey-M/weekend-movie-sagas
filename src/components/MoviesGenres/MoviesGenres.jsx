import { useParams } from 'react-router-dom';

function MoviesGenres() {
    const id = useParams().id;

    return (
        <>
            <p>
                Hello World <b>{id}</b>
            </p>
        </>
    );
}

export default MoviesGenres;
