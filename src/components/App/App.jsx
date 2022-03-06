import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList';

// component imports
import Details from '../Details/Details';

function App() {
    return (
        <div className='App'>
            <h1>The Movies Saga!</h1>
            <Router>
                <Switch>
                    <Route path='/details/:id'>
                        <Details />
                    </Route>
                    <Route path='/'>
                        <MovieList />
                    </Route>
                </Switch>

                {/* Details page */}

                {/* Add Movie page */}
            </Router>
        </div>
    );
}

export default App;
