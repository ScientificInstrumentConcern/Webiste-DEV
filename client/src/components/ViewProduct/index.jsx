import React, { useState, useEffect } from 'react';
import {
    Container,
    TextField,
    Typography,
    Grid,
    Paper,
    Button,
} from '@material-ui/core';

//To fetch data from params
import { useParams } from 'react-router';
//redux stuffs
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleProduct } from '../../redux/action-creators/Product';
//Firebase file upload function
import ProductsLoader from '../utils/Product.loader';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

function ViewProduct() {
    //constants
    const { id } = useParams();
    const dispatch = useDispatch();
    let subtitle;
    //managing state
    const product = useSelector((state) => state.singleProduct);
    //redux: calling the action to view
    useEffect(() => {
        dispatch(fetchSingleProduct(id));
    }, [dispatch, id]);

    return product.loading ? (
        <ProductsLoader />
    ) : (
        <Container style={{ minHeight: '70vh' }}>
            <div style={{padding: '6rem 0'}}>
            <Grid container>
                <Grid item xs="4">
                    <Typography variant="h4">{product.data.code}</Typography>{' '}
                </Grid>
                <Grid item xs="1"></Grid>
                <Grid item xs="7">
                    <Typography variant="h3">{product.data.name}</Typography>
                </Grid>
            </Grid>
            <br />
            <Grid container>
                <Grid item md="6">
                    <Typography variant="h4">Technical Description</Typography>
                    <Container>
                        <Typography variant="body1">
                            {product.data.desc}
                        </Typography>

                        <br />
                        <br />
                        <Paper elevation={0} style={{ padding: '0rem' }}>
                            <img
                                src={product.data.descImg}
                                alt="Instrument Description"
                                style={{ width: '100%', height: '100%' }}
                            />
                        </Paper>
                    </Container>
                </Grid>
                <Grid item md="1"></Grid>
                <Grid item md="5">
                    <Button
                        disableFocusRipple
                        disableTouchRipple
                        disabled
                        variant="outlined"
                        style={{ marginTop: '3rem' }}
                    >
                        <img
                            src={product.data.itemImg}
                            alt="Instrument Cover"
                            style={{ height: '105%', width: '100%' }}
                        />
                    </Button>
                </Grid>
            </Grid>
            </div>
        </Container>
    );
}

export default ViewProduct;
