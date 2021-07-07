import React, { useState, useEffect } from "react";
import {
  Container,
  TextField,
  Typography,
  Grid,
  Paper,
  Button,
} from "@material-ui/core";
import Modal from "react-modal";
//To fetch data from params
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
//redux stuffs
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleProduct } from "../../redux/action-creators/productionAction";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function ViewProduct() {
  //constants
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  let subtitle;

  //redux
  useEffect(() => {
    dispatch(fetchSingleProduct(id));
  }, [dispatch, id]);

  const { error, data, loading } = useSelector((state) => state.product);

  console.log(data);

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
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }
  function closeModal() {
    setIsOpen(false);
  }
  function closeModaldelete() {
    setdelete(false);
  }

  return (
    <Container style={{ minHeight: "70vh" }}>
      <br />
      <Grid container>
        <Grid item xs="3">
          <Typography variant="h4">{data.code}</Typography>{" "}
        </Grid>
        <Grid item xs="1"></Grid>
        <Grid item xs="7">
          <Typography variant="h4">{data.name}</Typography>
        </Grid>
      </Grid>
      <br />
      <Grid container>
        <Grid item md="6">
          <Typography variant="h5">Technical Description</Typography>
          <Container>
            <Typography variant="body1">{data.desc}</Typography>

            <br />
            <br />
            <Paper elevation={3} style={{ padding: "0.5rem" }}>
              <img
                src={data.descImg}
                alt="Instrument Description"
                style={{ width: "100%", height: "100%" }}
              />
            </Paper>
          </Container>
        </Grid>
        <Grid item md="1"></Grid>
        <Grid item md="5">
          <Button
            disableFocusRipple
            disableTouchRipple
            variant="outlined"
            style={{ marginTop: "3rem" }}
          >
            <img
              src={data.itemImg}
              alt="Instrument Cover image"
              style={{ height: "100%", width: "100%" }}
            />
          </Button>
        </Grid>
      </Grid>

      <br />
      <br />
      <Button
        variant="contained"
        style={{ background: "#cb0000", color: "white" , marginRight: '1rem' }}
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
            fullWidth
            label="Instrument Code"
            name="code"
            autoFocus
            // value={formik.values.email}
            //onChange={formik.handleChange}
            //error={formik.touched.email && Boolean(formik.errors.email)}
            // helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Instrument name"
            name="code"
            autoFocus
            // value={formik.values.email}
            //onChange={formik.handleChange}
            //error={formik.touched.email && Boolean(formik.errors.email)}
            // helperText={formik.touched.email && formik.errors.email}
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Instrument Description"
            name="code"
            autoFocus
            // value={formik.values.email}
            //onChange={formik.handleChange}
            //error={formik.touched.email && Boolean(formik.errors.email)}
            // helperText={formik.touched.email && formik.errors.email}
          />
          <Typography variant="subtitle2">For image Desciption</Typography>
          <input type="file" name="" id="" />
          <br />
          <Typography variant="subtitle2">For Cover Image</Typography>
          <input type="file" name="" id="" />
        </form>
        <br />
        <Button variant="contained" color='primary' onClick={closeModal} style={{marginRight:'1rem'}}>
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
        <Button variant="contained" color='primary' onClick={closeModaldelete} style={{marginRight:'1rem'}}>
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
