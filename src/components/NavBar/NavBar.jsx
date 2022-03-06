import { ButtonGroup, Button } from '@mui/material';

import { useHistory } from 'react-router-dom';

function NavBar() {
    const history = useHistory();

    const handleClick = () => {
        history.push('/');
    };

    return (
        <>
            <div
                style={{
                    textAlign: 'left',
                    padding: '5px',
                }}
            >
                <ButtonGroup variant='text'>
                    <Button onClick={handleClick}>Home</Button>
                    <Button onClick={() => history.push('/genres')}>
                        Genres
                    </Button>
                    <Button>Add Movie</Button>
                    <Button>Add Genre</Button>
                </ButtonGroup>
            </div>
        </>
    );
}

export default NavBar;
