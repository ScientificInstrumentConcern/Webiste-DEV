import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
    Container,
    Typography,
    TextField,
    Grid,
    Button,
} from '@material-ui/core';
import { useStyles } from '../../Styles/newProduct';

//Redux stuff
import { useDispatch } from 'react-redux';
import { createProduct } from '../../redux/action-creators';
//Firebase file upload function
import { fileUpload } from '../firebase/firebaseFileUpload';

function Newproduct() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const [code, setCode] = useState('');
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [instrumentImage, setInstrumentImage] = useState('');
    const [instrumentDesc, setInstrumentDesc] = useState('');
    const [OptioanlImg, setOptioanlImg] = useState('');

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
        //For optional Instrument Description link generation
        const optionalLinkGen = async (e) => {
            const file = e.target.files[0];
            const imageLink = await fileUpload(file);
            setOptioanlImg(imageLink);
        };

    //OnSubmit function dispatch all data to api and render to homepage
    const save = () => {
        dispatch(
            createProduct(code, name, desc, instrumentImage, instrumentDesc, OptioanlImg)
        );
        history.push('/');
    };

    return (
        <Container>
            <div className={classes.section}>
                <Typography
                    variant="h3"
                    align="center"
                    className={classes.title}
                >
                    New Product
                </Typography>

                <Container maxWidth="md">
                    <Grid container>
                        <Grid item md="4">
                            <TextField
                                label="Instrument Code"
                                className={classes.textField}
                                value={code}
                                onChange={(e) => setCode(e.target.value)}
                                fullWidth={true}
                            />
                        </Grid>
                        <Grid item md="1"></Grid>
                        <Grid item md="7">
                            <TextField
                                label="Instrument Name"
                                className={classes.textField}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                fullWidth={true}
                            />
                        </Grid>
                    </Grid>
                    <br />
                    <br />
                    <TextField
                        placeholder="Instrument Description........."
                        multiline
                        rows={18}
                        rowsMax={9}
                        className={classes.textArea}
                        variant="filled"
                        fullWidth={true}
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                    />
                    <br />
                    <br />
                    <Typography variant="h6" htmlFor="Instrument-Image">
                        Instrument Image
                    </Typography>
                    <input
                        type="file"
                        id="Instrument-Image"
                        multiple={false}
                        onChange={ImageLinkGen}
                    />
                    <br />
                    <br />
                    <Typography variant="h6" htmlFor="Instrument-Image">
                        Instrument Details Image
                    </Typography>
                    <input
                        type="file"
                        id="Instrument-Image"
                        multiple={false}
                        onChange={DescLinkGen}
                    />
                    <Typography variant="h6" htmlFor="Instrument-Image">
                        Optional Details Image
                    </Typography>
                    <input
                        type="file"
                        id="Instrument-Image"
                        multiple={false}
                        onChange={optionalLinkGen}
                    />
                    <br /> <br />
                    <Button
                        variant="outlined"
                        style={{ background: '#235cb0', color: 'white' }}
                        onClick={save}
                    >
                        Save
                    </Button>
                </Container>
            </div>
        </Container>
    );
}

export default Newproduct;
