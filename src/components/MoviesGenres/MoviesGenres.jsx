import axios from 'axios';
import { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// component imports
import MovieCard from '../MovieCard/MovieCard';

function MoviesGenres() {
    const dispatch = useDispatch();

    const id = useParams().id;

    const movieSection = useRef();

    // store movies in a redux reducer
    const movies = useSelector((store) => store.movies);
    const currentGenre = useSelector((store) => store.selectedGenre);

    // update the size of the movie selection based off its contents
    const updateWidth = () => {
        // console.log(movieSection.current);

        let movieAmount = Math.floor((window.innerWidth * 0.9) / 260);
        // console.log({ movieAmount });

        movieSection.current.style.width =
            movieAmount * 250 + (movieAmount - 1) * 10 + 'px';
    };

    useEffect(() => {
        updateWidth();

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

        window.addEventListener('resize', updateWidth);
        return () => window.removeEventListener('resize', updateWidth);
    }, []);

    return (
        <>
            <h1>Genre: {currentGenre}</h1>
            <section className='movies' ref={movieSection}>
                {movies.map((movie) => {
                    // MovieCard takes two props poster and title
                    return <MovieCard key={movie.movie_id} {...movie} />;
                })}
            </section>
        </>
    );
}

export default MoviesGenres;
