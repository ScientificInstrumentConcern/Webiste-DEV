import React from 'react';
import { Container } from '@material-ui/core';
import Hero from './components/Hero';
import Products from './components/Products';
import About from './components/About';
import Clients from './components/Clients';
import { useStyles } from '../../Styles/Home/heroStyling';

function Home() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Hero />
            <Container>
                <About />
                <Products />
                <Clients />
            </Container>
        </div>
    );
}

export default Home;
