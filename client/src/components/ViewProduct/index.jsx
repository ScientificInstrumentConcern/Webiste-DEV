import React, {useState, useEffect } from 'react';
import { Container, Typography, Grid, Paper, Button, TextField } from '@material-ui/core';

//To fetch data from params
import { useParams } from 'react-router';
//redux stuffs
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleProduct } from '../../redux/action-creators/Product';
//Firebase file upload function
import ProductsLoader from '../utils/singleproduct.loader';
//For modal
import Modal from 'react-modal';
const customStyles = {
    content: {
        top: '53%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '75%'
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
 //Functions and states for for Modals
 const [modalIsOpen, setIsOpen] = useState(false);
 function openModal() {
     setIsOpen(true);
 }
 function afterOpenModal() {
     subtitle.style.color = '#000';
 }
 function closeModal() {
     setIsOpen(false);
 }



    return product.loading ? (
        <ProductsLoader />
    ) : (
        <Container style={{ minHeight: '70vh' }}>
            <div style={{ padding: '6rem 0' }}>
                <Grid container>
                    <Grid item xs="4">
                        <Typography variant="h4">
                            {product.data.code}
                        </Typography>{' '}
                    </Grid>
                    <Grid item xs="1"></Grid>
                    <Grid item xs="7">
                        <Typography variant="h3">
                            {product.data.name}
                        </Typography>
                    </Grid>
                </Grid>
                <br />
                <Grid container>
                    <Grid item md="6">
                        <Typography variant="h4">
                            Technical Description
                        </Typography>
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
                            {product.data.optionalImage ? (
                                <>
                                    <Paper
                                        elevation={0}
                                        style={{ marginTop: '1rem' }}
                                    >
                                        <img
                                            src={product.data.optionalImage}
                                            alt="Instrument Description"
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                            }}
                                        />
                                    </Paper>{' '}
                                </>
                            ) : (
                                <> </>
                            )}
                        </Container>
                    </Grid>
                    <Grid item md="2"></Grid>
                    <Grid item md="4">
                        <Button
                            disableFocusRipple
                            disableTouchRipple
                            disabled
                            variant="outlined"
                            style={{ marginTop: '3rem', width: '100%' }}
                        >
                            <img
                                src={product.data.itemImg}
                                alt="Instrument Cover"
                                style={{ height: '105%', width: '100%' }}
                            />
                        </Button>
                        <br />
                        <br />
                        <Typography
                            align="center"
                            style={{ marginTop: '2rem' }}
                        >
                            <Button
                                variant="contained"
                                color="secondary"
                                size="large"
                                onClick={openModal}
                            >
                                Ask for Quotation
                            </Button>
                        </Typography>
                    </Grid>
                </Grid>
            </div>

 {/**
             * Modal code which will be rendered for edit
             */}
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="For edit purpose"
            >
                <h2 ref={(_subtitle) => (subtitle = _subtitle)} >
                    Request for a Quotation
                </h2>
                <Container>
                <form>
                    <TextField
                       variant='standard'
                        margin="normal"
                        required
                        label="Name"
                        name="code"
                        autoFocus
                        fullWidth={true}
                        color='secondary'
                    />
                                        <TextField
                       variant='standard'
                        margin="normal"
                        required
                        label="Email"
                        name="code"
                        autoFocus
                        fullWidth={true}
                        color='secondary'
                    />
                                        <TextField
                       variant='standard'
                        margin="normal"
                        required
                        label="Company"
                        name="code"
                        autoFocus
                        fullWidth={true}
                        color='secondary'
                    />
                                        <TextField
                       variant='standard'
                        margin="normal"
                        required
                        label="Country"
                        name="code"
                        autoFocus
                        fullWidth={true}
                        color='secondary'
                    />
                                        <TextField
                       variant='standard'
                        margin="normal"
                        required
                        label="City"
                        name="code"
                        autoFocus
                        fullWidth={true}
                        color='secondary'
                    />
                                        <TextField
                       variant='standard'
                        margin="normal"
                        required
                        label="Specification"
                        name="code"
                        autoFocus
                        fullWidth={true}
                        color='secondary'
                        multiline
                        rows={3}
                        rowsMax={3}
                    />
                <br /><br />
                <Button
                type='submit'
                    variant="contained"
                    color="primary"
                    style={{ marginRight: '1rem' }}
                >
                    Submit
                </Button>
                <Button variant="outlined" onClick={closeModal}>
                    close
                </Button>

                </form>
                </Container>
            </Modal>







        </Container>
    );
}

export default ViewProduct;
