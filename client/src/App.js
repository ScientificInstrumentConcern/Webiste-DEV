import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core';
import ScrollToTop from './scrolltotop';

import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Catalouge from './components/catalouge';
import Contact from './components/Contact';

import theme from './theme';


function App() {
    return (
        <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
                <ScrollToTop>
                    <Navbar />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/Products" component={Catalouge} />
                        <Route exact path='/Contact' component={Contact}/>
                    </Switch>
                    <Footer />
                </ScrollToTop>
            </Router>
        </MuiThemeProvider>
    );
}

export default App;
