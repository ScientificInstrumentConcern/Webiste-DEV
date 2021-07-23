import React from 'react';
import { Container } from '@material-ui/core';
import Hero from './components/Hero';
import Products from './components/Products';
import About from './components/About';
import Clients from './components/Clients';
import { useStyles } from '../../Styles/Home/hero';
import SendEdquiry from './components/SendEdquiry';

function Home() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Hero />
            <Container>
                <About />
                <Products />
            </Container>
            <Clients />
            <Container >
            <SendEdquiry />
            </Container>
            
        </div>
    );
}

export default Home;
