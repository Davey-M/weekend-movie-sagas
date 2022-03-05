import './MovieCard.css';

function MovieCard({ title, poster }) {
    return (
        <div className='movie-card'>
            <img className='movie-card-img' src={poster} alt={title} />
        </div>
    );
}

export default MovieCard;
