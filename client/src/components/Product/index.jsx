import React, { useEffect } from 'react';
import { Container, Typography, Grid } from '@material-ui/core';
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';
//Redux stuff
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../../redux/action-creators/Product';
//Styling components
import { useStyles } from '../../Styles/Product';
import ProductsLoader from '../utils/Product.loader';


//Rendering function
function Home() {
    const dispatch = useDispatch();
    const classes = useStyles();
    //calling get instrument actions to get the data
    useEffect(() => {
        dispatch(fetchProduct());
    }, [dispatch]);

    const { data, loading } = useSelector((state) => state.product);
    return loading ? (
        <ProductsLoader  className={classes.section}/>
    ) : (
        <Container>
            <div className={classes.section}>
                <Typography
                    variant="h3"
                    align="center"
                    className={classes.title}
                >
                    Our Products
                </Typography>

                <Grid container spacing={3}>
                    {data &&
                        data
                            .slice(0)
                            .reverse()
                            .map((i, key) => (
                                <Grid item xs={12} md={4} lg={4} key={key}>
                                    <Link
                                        to={`view/${i._id}`}
                                        style={{ textDecoration: 'none' }}
                                    >
                                        <ProductCard
                                            title={i.name}
                                            desc={i.desc}
                                            img={i.itemImg}
                                        />
                                    </Link>
                                </Grid>
                            ))}
                </Grid>
            </div>
        </Container>
    );
}

export default Home;
