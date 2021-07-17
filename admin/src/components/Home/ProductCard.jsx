import { Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Skelton from '../utils/singleProduct.loader';

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

const load = () => {
<Skelton/>
}

function ProductCard(props) {
    const classes = useStyles();
    return (
        <>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={props.img}
                        onload={load}
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
                    <Button size="small" color="secondary">
                        Learn More
                    </Button>
                </CardActions>
            </Card>
        </>
    );
}

export default ProductCard;
