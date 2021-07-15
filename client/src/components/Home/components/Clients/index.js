import React from 'react';
import { Typography } from '@material-ui/core';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
//assets
import one from '../../../../assets/slides/1.png';
import two from '../../../../assets/slides/2.png';
import three from '../../../../assets/slides/3.png';
import four from '../../../../assets/slides/4.png';
import five from '../../../../assets/slides/5.png';
import six from '../../../../assets/slides/6.png';
import seven from '../../../../assets/slides/7.png';
import eight from '../../../../assets/slides/8.png';
import nine from '../../../../assets/slides/9.png';
import ten from '../../../../assets/slides/10.png';
import eleven from '../../../../assets/slides/11.png';
import twelve from '../../../../assets/slides/12.png';
import thirteen from '../../../../assets/slides/13.png';
import fourteen from '../../../../assets/slides/14.png';
function Clients() {
    return (
        <div>
            <Typography align="center" variant="h3" component="h3">
                Our Clients
            </Typography>
            <OwlCarousel
                className="owl-theme"
                autoplay
                loop
                margin={10}
                nav
                items={5}
            >
                <div class="item">
                    <img src={four} alt='Gov1'/>
                </div>
                <div class="item">
                    <img src={five} alt='Gov2'/>
                </div>
                <div class="item">
                    <img src={six} alt='Private'/>
                </div>
                <div class="item">
                    <img src={one} alt='Private'/>
                </div>
                <div class="item">
                    <img src={two} alt='Private'/>
                </div>
                <div class="item">
                    <img src={three} alt='Private'/>
                </div>

            </OwlCarousel>
        </div>
    );
}

export default Clients;
