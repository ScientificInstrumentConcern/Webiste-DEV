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
        <div style={{ margin: '5rem 0' }}>
            <Typography
                align="center"
                variant="h3"
                component="h3"
                style={{ margin: '3rem 0' }}
            >
                Our Clients
            </Typography>
            <OwlCarousel
                className="owl-height"
                autoplay
                loop
                margin={30}
                nav
                center
                responsiveClass
                items={6}
                lazyLoad
            >
                <div class="item">
                    <img src={one} alt="Private" />
                </div>
                <div class="item">
                    <img src={nine} alt="Gov1" />
                </div>
                <div class="item">
                    <img
                        src={three}
                        alt="Private"
                        style={{ marginTop: '2rem' }}
                    />
                </div>
                <div class="item">
                    <img src={four} alt="Gov1" />
                </div>
                <div class="item">
                    <img src={five} alt="Gov1" />
                </div>
                <div class="item">
                    <img src={six} alt="Gov1" />
                </div>
                <div class="item">
                    <img
                        src={two}
                        alt="Private"
                        style={{ marginTop: '2rem' }}
                    />
                </div>
                <div class="item">
                    <img src={seven} alt="Gov1" />
                </div>
                <div class="item">
                    <img src={eight} alt="Gov1" />
                </div>
                <div class="item">
                    <img src={ten} alt="Gov1" />
                </div>
                <div class="item">
                    <img src={eleven} alt="Gov1" />
                </div>
                <div class="item">
                    <img src={twelve} alt="Gov1" />
                </div>
                <div class="item">
                    <img src={thirteen} alt="Gov1" />
                </div>
                <div class="item">
                    <img src={fourteen} alt="Gov1" />
                </div>
            </OwlCarousel>
        </div>
    );
}

export default Clients;
