import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch,
} from 'react-router-dom';
import { MuiThemeProvider} from '@material-ui/core';
import ScrollToTop from './scrolltotop';

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './components/Home';

import theme from './theme';
function App() {
    return (
        <MuiThemeProvider theme={theme}>
            <Router>
                <ScrollToTop>
                    <Navbar />
                    <Switch>
                        <Route exact path="/" component={Home} />
                    </Switch>
                    <Footer />
                </ScrollToTop>
            </Router>
        </MuiThemeProvider>
    );
}

export default App;
