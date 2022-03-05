import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css';

// component imports
import MovieCard from '../MovieCard/MovieCard';

function MovieList() {
    const dispatch = useDispatch();

    // we use useRef in this section to avoid unnecessary re-renders of objects children.
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

    // get movies on initial load
    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });

        updateWidth();
        window.addEventListener('resize', updateWidth);

        // returned function will run when the component unmounts
        return () => window.removeEventListener('resize', updateWidth);
    }, []);

    return (
        <main>
            <h1>MovieList</h1>
            <section className='movies' ref={movieSection}>
                {movies.map((movie) => {
                    // MovieCard takes two props poster and title
                    return <MovieCard key={movie.id} {...movie} />;
                })}
            </section>
        </main>
    );
}

export default MovieList;
