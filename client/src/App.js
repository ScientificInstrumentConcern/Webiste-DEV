import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core';
import ScrollToTop from './scrolltotop';

import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Products from './components/Product';
import ViewProduct from './components/ViewProduct'
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
                        <Route exact path="/Contact" component={Contact} />
                        <Route exact path="/About" component={About} />
                        <Route exact path="/products" component={Products} />
                        <Route exact path="/view/:id" component={ViewProduct} />
                    </Switch>
                    <Footer />
                </ScrollToTop>
            </Router>
        </MuiThemeProvider>
    );
}

export default App;
