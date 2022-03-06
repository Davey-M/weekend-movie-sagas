import { useHistory } from 'react-router-dom';
import './MovieCard.css';

function MovieCard({ title, poster, id, movie_id }) {
    const history = useHistory();

    const handleClick = () => {
        if (movie_id) {
            history.push(`/details/${movie_id}`);
        } else {
            history.push(`/details/${id}`);
        }
    };

    return (
        <div className='movie-card' onClick={handleClick}>
            <img className='movie-card-img' src={poster} alt={title} />
        </div>
    );
}

export default MovieCard;
