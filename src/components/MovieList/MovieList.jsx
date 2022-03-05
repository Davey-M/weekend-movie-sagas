import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css';

// component imports
import MovieCard from '../MovieCard/MovieCard';

function MovieList() {
    const dispatch = useDispatch();

    // store movies in a redux reducer
    const movies = useSelector((store) => store.movies);

    // get movies on initial load
    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <main>
            <h1>MovieList</h1>
            <section className='movies'>
                {movies.map((movie) => {
                    // MovieCard takes two props poster and title
                    return <MovieCard key={movie.id} {...movie} />;
                })}
            </section>
        </main>
    );
}

export default MovieList;
