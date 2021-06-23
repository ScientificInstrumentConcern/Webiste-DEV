import { Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        boxShadow: '0 0 2px 1px grey',
    },
    media: {
        height: 150,
    },
    title: {
        fontWeight: '600',
    },
    section: {
        padding: '5vh 0',
    },
});

function ProductCard() {
    const classes = useStyles();
    return (
        <>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image="https://images.unsplash.com/photo-1520031559723-e38a5ab03c79?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Mortuary Equipment
                        </Typography>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                        >
                            Proper handling of dead bodies ensure proper
                            investigation of the cause of death, use in Medical
                            research and further disposal of the body. Jindal
                            Mortuary productCard ensure proper handling /
                            storage of cadaverous over a long period of time.
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    {/*  <Button size="small" color="secondary">
          Learn More
        </Button>*/}
                </CardActions>
            </Card>
        </>
    );
}

export default ProductCard;
