import { ButtonGroup, Button } from '@mui/material';

import { useHistory } from 'react-router-dom';

function NavBar() {
    const history = useHistory();

    return (
        <>
            <div
                style={{
                    textAlign: 'left',
                    padding: '5px',
                }}
            >
                <ButtonGroup variant='text'>
                    <Button onClick={() => history.push('/')}>Home</Button>
                    <Button onClick={() => history.push('/genres')}>
                        Genres
                    </Button>
                    <Button onClick={() => history.push('/add-movie')}>
                        Add Movie
                    </Button>
                </ButtonGroup>
            </div>
        </>
    );
}

export default NavBar;
