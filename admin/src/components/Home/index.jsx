import React, {useEffect} from "react";
import { Container, Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
//Redux stuff
import { useDispatch, useSelector } from "react-redux";
import {fetchProduct} from '../../redux/action-creators'

const useStyles = makeStyles({
  section: {
    padding: "5vh 0",
  },
  title: {
    padding: "2rem 0 3rem 0",
  },
});

const ourProduct = [
  {
    sl: 1,
    title: "BOD Incubator",
    desc: "Our extensive range of B.O.D. Incubators has been designed especially for biological Oxygen demand determination & other applications like general incubators, Serum studies & Enzyme assays test. We can also customize the B.O.D. Incubators to suit the varied requirement of the clients with in stipulated time frame.",
    img: "https://www.ilabot.com/images/bod-incubator.jpg",
  },
  {
    sl: 2,
    title: "Tissue Culture Rack",
    desc: "Tissue culture racks are very useful for various types of tissue culture plants and other tissue culture work in tissue culture room.",
    img: "https://5.imimg.com/data5/NK/AA/WC/SELLER-216176/tissue-culture-rack-500x500.jpg",
  },
  {
    sl: 3,
    title: "PH Meter",
    desc: "PH meter, electric device used to measure hydrogen-ion activity (acidity or alkalinity) in solution. Fundamentally, a pH meter consists of a voltmeter attached to a pH-responsive electrode and a reference (unvarying) electrode. ",
    img: "https://assets.fishersci.com/TFS-Assets/CCG/product-images/F262186~p.eps-650.jpg",
  },
  {
    sl: 4,
    title: "Colony Meter",
    desc: "Colony Counter is designed for quick and accurate counting of bacterial and mould colonies in petri dishes",
    img: "https://images-na.ssl-images-amazon.com/images/I/41hUW-9oTmL.jpg",
  },
  {
    sl: 5,
    title: "Single Glass Distilation",
    desc: " Ideal for general laboratory use- capable of producing pyrogen free water, provided distillation unit is manufactured by our adroit professionals using optimum quality components and innovative technology in compliance with quality norms. In order to ensure its quality, this distillation unit is tested by our quality examiners on varied parameters.",
    img: "https://4.imimg.com/data4/TA/CC/ETO-1153304/borosil-3361-all-glass-single-distillation-unit_21-500x500.jpg",
  },
  {
    sl: 6,
    title: "Mono Quartz Distilation Unit",
    desc: "VITSIL mono quartz distillers being very compact and the construction material being high purity quartz, it meets the standard of the analytical laboratory where purity of distilled water free from metallic ions and bacteria is criteria.",
    img: "https://productimages.withfloats.com/tile/5f1ebc7fb6d86700018e1fdc.jpg",
  },
];

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
              .map((i) => (
                <Grid item xs={12} md={4} lg={4} key={i}>
                  <Link to="view/:id" style={{ textDecoration: "none" }}>
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
