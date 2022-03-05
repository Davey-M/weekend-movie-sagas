import { useHistory } from 'react-router-dom';
import './MovieCard.css';

function MovieCard({ title, poster, id }) {
    const history = useHistory();

    const handleClick = () => {
        history.push(`/details/${id}`);
    };

    return (
        <div className='movie-card' onClick={handleClick}>
            <img className='movie-card-img' src={poster} alt={title} />
        </div>
    );
}

export default MovieCard;
