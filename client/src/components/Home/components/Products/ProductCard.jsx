import { Typography, Button } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        boxShadow: '0 0 2px 1px grey',
    },
    media: {
        height: 270,
    },
    title: {
        fontWeight: '600',
    },
    section: {
        padding: '5vh 0',
    },
});

function ProductCard(props) {
    console.log(props);
    const classes = useStyles();
    return (
        <>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={props.img}
                        title="Instrument Image"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {props.title}
                        </Typography>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                        >
                            {props.desc}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Link to="/products" style={{ textDecoration: 'none' }}>
                        <Button size="small" color="secondary">
                            Learn More
                        </Button>
                    </Link>
                </CardActions>
            </Card>
        </>
    );
}

export default ProductCard;
