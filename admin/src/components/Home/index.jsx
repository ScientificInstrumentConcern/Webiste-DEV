import React, {useEffect} from "react";
import { Container, Typography, Grid } from "@material-ui/core";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
//Redux stuff
import { useDispatch, useSelector } from "react-redux";
import {fetchProduct} from '../../redux/action-creators'
//Styling components
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  section: {
    padding: "5vh 0",
  },
  title: {
    padding: "2rem 0 3rem 0",
  },
});

//Rendering function
function Home() {
  const dispatch = useDispatch();
  const classes = useStyles();
//calling get instrument actions to get the data
useEffect(() => {
    dispatch(fetchProduct())
},[dispatch])

  const {data} = useSelector((state) => state.product);
  console.log(data);
  return (
    <Container>
      <div className={classes.section}>
        <Typography variant="h3" align="center" className={classes.title}>
          Our Products
        </Typography>

        <Grid container spacing={3}>
          {data &&
            data
              .slice(0)
              .reverse()
              .map((i, key) => (
                <Grid item xs={12} md={4} lg={4} key={key}>
                  <Link to={`view/${i._id}`} style={{ textDecoration: "none" }}>
                    <ProductCard title={i.name} desc={i.desc} img={i.itemImg} />
                  </Link>
                </Grid>
              ))}
        </Grid>
      </div>
    </Container>
  );
}

export default Home;
