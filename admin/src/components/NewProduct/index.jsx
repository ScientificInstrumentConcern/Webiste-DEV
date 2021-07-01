import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Input,
  Grid,
  Button,
} from "@material-ui/core";
import { useStyles } from "../../Styles/newProduct";

function Newproduct() {
  const classes = useStyles();
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [instrumentImage, setInstrumentImage] = useState("");
  const [instrumentDesc, setInstrumentDesc] = useState("");

  const instrumentImageFile = (e) => {
    const file = e.target.files[0];
    if (file) {
      setInstrumentImage(file)
    }
  };
  const instrumentDetailsFile = (e) => {
    const file = e.target.files[0];
    if (file) {
      setInstrumentDesc(file)
    }
  };

  const save = () => {
    console.log(code, name , desc, instrumentImage, instrumentDesc);
  }

  return (
    <Container>
      <div className={classes.section}>
        <Typography variant="h3" align="center" className={classes.title}>
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
                fullWidth="true"
              />
            </Grid>
            <Grid item md="1"></Grid>
            <Grid item item md="7">
              <TextField
                label="Instrument Name"
                className={classes.textField}
                value={name}
                onChange={(e) => setName(e.target.value)}
                fullWidth="true"
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
            fullWidth="true"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
          <br />
          <br />
          <Typography variant="h6" for="Instrument-Image">
            Instrument Image
          </Typography>
          <Input 
          type="file"
           id="Instrument-Image"
           onChange={(event) => instrumentImageFile(event)}
            />
          <br />
          <br />
          <Typography variant="h6" for="Instrument-Image">
            Instrument Details Image
          </Typography>
          <Input type="file"
           id="Instrument-Details"
           onChange={(event) => instrumentDetailsFile(event)}
            />
          <br /> <br />
          <Button
            variant="outlined"
            style={{ background: "#235cb0", color: "white" }}
          >
            Save
          </Button>
        </Container>
      </div>
    </Container>
  );
}

export default Newproduct;
