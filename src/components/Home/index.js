import React from 'react';

import Hero from './components/Hero'
import { useStyles } from '../../Styles/Home/heroStyling';
import Products from './components/Products';
import About from './components/About'
import { Container } from '@material-ui/core';

function Home() {
    const classes = useStyles();

    return <div>
        <Hero />
        <Container>
            <About />
        <Products />
        </Container>
        
    </div>;
}

export default Home;
