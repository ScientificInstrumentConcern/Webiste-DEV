import React, { useState, useEffect } from 'react';
import {
    Container,
    TextField,
    Typography,
    Grid,
    Paper,
    Button,
} from '@material-ui/core';
import Modal from 'react-modal';
//To fetch data from params
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';
//redux stuffs
import { useDispatch, useSelector } from 'react-redux';
import {
    fetchSingleProduct,
    UpdateProduct,
    DeleteProduct,
} from '../../redux/action-creators/productionAction';
//Firebase file upload function
import { fileUpload } from '../firebase/firebaseFileUpload';
import ProductsLoader from '../utils/Products.loader';
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
    const history = useHistory();
    const dispatch = useDispatch();
    let subtitle;
    //managing state
    const product = useSelector((state) => state.singleProduct);

    //setting states
    const [code, setCode] = useState(
        product.loading ? 'product.data.code' : product.data.code
    );
    const [name, setName] = useState(product.loading ? '' : product.data.name);
    const [desc, setDesc] = useState(product.loading ? '' : product.data.desc);
    const [instrumentImage, setInstrumentImage] = useState(
        product.loading ? '' : product.data.itemImg
    );
    const [instrumentDesc, setInstrumentDesc] = useState(
        product.loading ? '' : product.data.descImg
    );

    //For Instrument Image link generation
    const ImageLinkGen = async (e) => {
        const file = e.target.files[0];
        const imageLink = await fileUpload(file);
        setInstrumentImage(imageLink);
    };
    //For Instrument Description link generation
    const DescLinkGen = async (e) => {
        const file = e.target.files[0];
        const imageLink = await fileUpload(file);
        setInstrumentDesc(imageLink);
    };

    //redux: calling the action to view
    useEffect(() => {
        dispatch(fetchSingleProduct(id));
    }, [dispatch, id]);
    //OnSubmit function dispatch all data to api and render to homepage
    const save = () => {
        dispatch(
            UpdateProduct(id, code, name, desc, instrumentImage, instrumentDesc)
        );
        history.push('/');
    };
    //Function to delete product permanently
    const Delete = () => {
        dispatch(DeleteProduct(id));
        history.push('/');
    };
    //Functions for Modals
    const [modalIsOpen, setIsOpen] = useState(false);
    const [fordelete, setdelete] = useState(false);
    function openModal() {
        setIsOpen(true);
    }
    function openModaldelete() {
        setdelete(true);
    }
    function afterOpenModal() {
        subtitle.style.color = '#f00';
    }
    function closeModal() {
        setIsOpen(false);
    }
    function closeModaldelete() {
        setdelete(false);
    }

    return product.loading ? (
        <ProductsLoader />
    ) : (
        <Container style={{ minHeight: '70vh' }}>
            <br />
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

            <br />
            <br />
            <Button
                variant="contained"
                style={{
                    background: '#cb0000',
                    color: 'white',
                    marginRight: '1rem',
                }}
                onClick={openModaldelete}
            >
                Delete
            </Button>
            <Button onClick={openModal} variant="contained">
                Edit
            </Button>

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
                <h2 ref={(_subtitle) => (subtitle = _subtitle)}>
                    Edit your Instrument Data
                </h2>
                <form>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        label="Instrument Code"
                        name="code"
                        autoFocus
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        fullWidth={true}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        label="Instrument name"
                        name="code"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        fullWidth={true}
                    />

                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        label="Instrument Description"
                        name="code"
                        fullWidth={true}
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                    />
                    <Typography variant="subtitle2">
                        For image Desciption
                    </Typography>
                    <input
                        type="file"
                        id="Instrument-Image"
                        multiple={false}
                        onChange={ImageLinkGen}
                    />
                    <br />
                    <Typography variant="subtitle2">For Cover Image</Typography>
                    <input
                        type="file"
                        id="Instrument-Image"
                        multiple={false}
                        onChange={DescLinkGen}
                    />
                </form>
                <br />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={save}
                    style={{ marginRight: '1rem' }}
                >
                    Submit
                </Button>
                <Button variant="outlined" onClick={closeModal}>
                    close
                </Button>
            </Modal>

            {/*for Delete*/}
            {/**
             * Modal code which will be rendered for edit
             */}
            <Modal
                isOpen={fordelete}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModaldelete}
                style={customStyles}
                contentLabel="For edit purpose"
            >
                <h2 ref={(_subtitle) => (subtitle = _subtitle)}>
                    Are you sure you want to delete ?
                </h2>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={Delete}
                    style={{ marginRight: '1rem' }}
                >
                    Delete
                </Button>
                <Button variant="outlined" onClick={closeModaldelete}>
                    close
                </Button>
            </Modal>
        </Container>
    );
}

export default ViewProduct;
