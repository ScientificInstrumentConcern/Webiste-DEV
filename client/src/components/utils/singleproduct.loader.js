import React, { useState } from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import { Grid, Container, Typography } from '@material-ui/core';
import { nanoid } from 'nanoid';
function ProductsLoader() {
    const [uuid] = useState(nanoid);
    return (
        <div>
            <Container style={{ margin: '6rem' }}>
                <Grid container>
                    <Grid item xs={4}>
                        <Typography align="center" component="h6">
                            <Skeleton variant="text" width={200} />
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography align="center" component="h6">
                            <Skeleton variant="text" width={800} />
                        </Typography>
                    </Grid>
                </Grid>
                <br />
                <br />

                <Grid container spacing={0}>
                    <Grid item key={uuid} xs={12} sm={6} md={6}>
                        <div>
                            <Skeleton variant="text" width={800} />
                            <Skeleton variant="text" width={800} />
                            <Skeleton variant="rect" width={350} height={400} />
                        </div>
                    </Grid>
                    <Grid item key={uuid} xs={12} sm={6} md={4}>
                        <div>
                            <br/><br/><br/>
                            <Skeleton variant="rect" width={300} height={300} />
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default ProductsLoader;
