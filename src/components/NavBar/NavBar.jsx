import { Button } from '@mui/material';

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
                <Button variant='outlined' onClick={handleClick}>
                    Home
                </Button>
            </div>
        </>
    );
}

export default NavBar;
