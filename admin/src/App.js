import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core";
import ScrollToTop from "./scrolltotop";
import theme from "./theme";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Newproduct from "./components/NewProduct";
import ViewProduct from "./components/ViewProduct";

import { useSelector } from "react-redux";

function App() {
  const { data } = useSelector((state) => state.userLogin);
  console.log(data);
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Router >
        <ScrollToTop>
          <Switch>
          { !data && <Redirect exact from='/' to='/Login' />}
            <Route exact path="/Login" component={Login} />
            <Route exact path="/admin/register" component={Register} />
            <>
              <Navbar />
              <Route exact path="/" component={Home} />
              <Route exact path="/new" component={Newproduct} />
              <Route exact path="/view/:id" component={ViewProduct} />
              <Footer />
            </>
          </Switch>
        </ScrollToTop>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
