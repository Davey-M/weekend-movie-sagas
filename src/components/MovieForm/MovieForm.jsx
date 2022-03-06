import { Select, TextField, Button, MenuItem } from '@mui/material';

import './MovieForm.css';

function MovieForm() {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <>
            <h1>Add Movie</h1>
            <form onSubmit={handleSubmit} className='add-movie-form'>
                <TextField
                    label='Movie Title'
                    variant='outlined'
                    required
                    className='form-field'
                />
                <TextField
                    label='Movie Description'
                    variant='outlined'
                    rows={5}
                    className='form-field'
                    required
                />
                <TextField
                    label='Movie Poster Link'
                    variant='outlined'
                    className='form-field'
                    required
                />
                <div className='button-container'>
                    <p>Select Genre</p>
                    <Select
                        label=''
                        labelId='genre-label'
                        required
                        className='select'
                    >
                        <MenuItem value={1}>one</MenuItem>
                    </Select>
                    <Button type='submit' variant='contained'>
                        Add Movie
                    </Button>
                </div>
            </form>
        </>
    );
}

export default MovieForm;
