import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch,
} from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider} from '@material-ui/core';
import ScrollToTop from './scrolltotop';

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Catalouge from './components/catalouge';

import theme from './theme';

function App() {
    return (
        <MuiThemeProvider theme={theme}>
            <Router>
                <ScrollToTop>
                    <Navbar />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/catalouge" component={Catalouge} />
                    </Switch>
                    <Footer />
                </ScrollToTop>
            </Router>
        </MuiThemeProvider>
    );
}

export default App;
