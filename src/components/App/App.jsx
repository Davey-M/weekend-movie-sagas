import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList';

// component imports
import Details from '../Details/Details';
import NavBar from '../NavBar/NavBar';
import MoviesGenres from '../MoviesGenres/MoviesGenres';

function App() {
    return (
        <div className='App'>
            {/* <h1>The Movies Saga!</h1> */}
            <Router>
                <NavBar />
                <Switch>
                    <Route path='/details/:id'>
                        <Details />
                    </Route>
                    <Route path='/genres/:id'>
                        <MoviesGenres />
                    </Route>
                    <Route path='/' exact>
                        <MovieList />
                    </Route>
                    <Route path='*'>
                        <h1>Error 404: Page Not Found</h1>
                    </Route>
                </Switch>

                {/* Details page */}

                {/* Add Movie page */}
            </Router>
        </div>
    );
}

export default App;
