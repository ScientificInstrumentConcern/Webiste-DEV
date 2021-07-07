import React, {useState, useEffect} from "react";
import { Container, Typography, Grid, Paper, Button } from "@material-ui/core";
import Modal from "react-modal";
//To fetch data from params
import { useParams } from "react-router";
import { useHistory } from 'react-router-dom';
//redux stuffs
import { useDispatch, useSelector } from "react-redux";
import {fetchSingleProduct} from '../../redux/action-creators/productionAction'

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
  const {id}  = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  let subtitle;

  //redux
  useEffect(() => {
    dispatch(fetchSingleProduct(id))
},[dispatch , id])

const {error , data , loading} = useSelector((state) => state.product)

console.log(data);

  //Functions for Modals
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }
  function closeModal() {
    setIsOpen(false);
  }


  return (
    <Container style={{minHeight:'70vh'}}>
      <br />
      <Grid container>
        <Grid item xs="3">
          <Typography variant="h4">Code</Typography>{" "}
        </Grid>
        <Grid item xs="1"></Grid>
        <Grid item xs="7">
          <Typography variant="h4">Instrument Name</Typography>
        </Grid>
      </Grid>
      <br />
      <Grid container>
        <Grid item md="6">
          <Typography variant="h5">Technical Description</Typography>
          <Container>
            <Typography variant="body1">
              This is an instrument this is a good instrument one should buy
              this
            </Typography>

            <br />
            <br />
            <Paper elevation={3} style={{ padding: "0.5rem" }}>
              kkjjjj
            </Paper>
          </Container>
        </Grid>
        <Grid item md="1"></Grid>
        <Grid item md="5"></Grid>
      </Grid>

      <br />
      <br />
      <Button
        variant="contained"
        style={{ background: "#cb0000", color: "white" }}
        onClick={openModal}
      >
        Delete
      </Button>
      <Button onClick={openModal} variant='contained'>Edit</Button>



{/**
 * Modal code which will be rendered
 */}
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
    </Container>
  );
}

export default ViewProduct;
