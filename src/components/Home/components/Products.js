import { Typography } from '@material-ui/core'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react'
import ProductCard from './ProductCard';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      boxShadow: '0 0 2px 1px grey',
      
    },
    media: {
      height: 150,
    },
    title:{
      fontWeight: '600'
    },
    section:{
      padding: '5vh 0'
    }
  });


function Products() {
      const classes = useStyles();
    return (
        <div className={classes.section}>
            <Typography variant='h3' align='center' className={classes.title}>Our Products</Typography>

<ProductCard />

    <br/>

    <Typography align='center'><Button color='secondary' variant="contained">View more</Button></Typography>
        </div>
    )
}

export default Products
