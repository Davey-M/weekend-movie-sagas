import axios from 'axios';
import { useEffect, useRef } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// component imports
import MovieCard from '../MovieCard/MovieCard';

function MoviesGenres() {
    const dispatch = useDispatch();
    const history = useHistory();

    const id = useParams().id;

    const movieSection = useRef();

    // store movies in a redux reducer
    const movies = useSelector((store) => store.movies);

    // update the size of the movie selection based off its contents
    const updateWidth = () => {
        // console.log(movieSection.current);

        let movieAmount = Math.floor((window.innerWidth * 0.9) / 260);
        // console.log({ movieAmount });

        movieSection.current.style.width =
            movieAmount * 250 + (movieAmount - 1) * 10 + 'px';
    };

    useEffect(() => {
        // get all movies of the genre from the server
        axios
            .get(`/api/movie/genre/${id}`)
            .then((response) => {
                dispatch({
                    type: 'SET_MOVIES',
                    payload: response.data,
                });
            })
            .catch((err) => {
                console.error('Error in MoviesGenres()', err);
            });

        // setup the movie gallery resizing
        updateWidth();
        window.addEventListener('resize', updateWidth);
        return () => window.removeEventListener('resize', updateWidth);
    }, []);

    return (
        <>
            {movies[0] && <h1>Genre: {movies[0].genre_name}</h1>}
            <section className='movies' ref={movieSection}>
                {movies.map((movie, index) => {
                    // MovieCard takes two props poster and title
                    return <MovieCard key={index} {...movie} />;
                })}
            </section>
        </>
    );
}

export default MoviesGenres;
