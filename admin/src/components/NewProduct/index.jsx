import {
  Container,
  Typography,
  TextField,
  Input,
  Grid,Button
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    "& > *": {
      margin: "8px",
      width: "100%",
    },
  },
  section: {
    padding: "5vh 0",
  },
  title: {
    padding: "2rem 0 3rem 0",
  },
});

function Newproduct() {
  const classes = useStyles();
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
                id="margin-none"
                className={classes.textField}
                //value={postTitle}
                //onChange={(e) => setpostTitle(e.target.value)}
                fullWidth="true"
              />
            </Grid>
            <Grid item md="1"></Grid>
            <Grid item item md="7">
              <TextField
                label="Instrument Name"
                id="margin-none"
                className={classes.textField}
                //value={postTitle}
                // onChange={(e) => setpostTitle(e.target.value)}
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
            // value={postDesc}
            // onChange={(e) => setpostDesc(e.target.value)}
          />
          <br />

          <br />

          <Typography variant='h6' for="Instrument-Image">Instrument Image</Typography>
          <Input type="file" id="Instrument-Image" />

          <br />

          <br />

          <Typography variant='h6' for="Instrument-Image">Instrument Details Image</Typography>
          <Input type="file" id="Instrument-Image" />

          <br/> <br />
          <Button variant='outlined' style={{background:'#235cb0', color: 'white'}}>Save</Button>
        </Container>
      </div>
    </Container>
  );
}

export default Newproduct;
