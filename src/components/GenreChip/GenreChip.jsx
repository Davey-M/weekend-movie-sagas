import { useHistory } from 'react-router-dom';
import { Chip } from '@mui/material';

function GenreChip(props) {
    const history = useHistory();

    const handleGenreNavigate = () => {
        history.push(`/genres/${props.genre_id}`);
    };

    return (
        <Chip
            variant='filled'
            label={props.name}
            onClick={handleGenreNavigate}
        />
    );
}

export default GenreChip;
