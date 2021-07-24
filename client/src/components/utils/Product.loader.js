import React, { useState } from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import { Grid, Container, Typography } from '@material-ui/core';
import { nanoid } from 'nanoid';
function ProductsLoader() {
    const [uuid] = useState(nanoid);
    return (
        <div>
            <Container>
                <Typography align="center" component="h6">
                    <Skeleton variant="text" width={200} />
                </Typography>
                <Grid container spacing={0}>
                    <Grid item key={uuid} xs={12} sm={6} md={4}>
                        <div>
                            <Skeleton variant="rect" width={300} height={300} />
                            <Skeleton variant="text" width={200} />
                            <Skeleton variant="text" width={250} />
                        </div>
                    </Grid>
                    <Grid item key={uuid} xs={12} sm={6} md={4}>
                        <div>
                            <Skeleton variant="rect" width={300} height={300} />
                            <Skeleton variant="text" width={200} />
                            <Skeleton variant="text" width={250} />
                        </div>
                    </Grid>
                    <Grid item key={uuid} xs={12} sm={6} md={4}>
                        <div>
                            <Skeleton variant="rect" width={300} height={300} />
                            <Skeleton variant="text" width={200} />
                            <Skeleton variant="text" width={250} />
                        </div>
                    </Grid>
                    <Grid item key={uuid} xs={12} sm={6} md={4}>
                        <div>
                            <Skeleton variant="rect" width={300} height={300} />
                            <Skeleton variant="text" width={200} />
                            <Skeleton variant="text" width={250} />
                        </div>
                    </Grid>
                    <Grid item key={uuid} xs={12} sm={6} md={4}>
                        <div>
                            <Skeleton variant="rect" width={300} height={300} />
                            <Skeleton variant="text" width={200} />
                            <Skeleton variant="text" width={250} />
                        </div>
                    </Grid>
                    <Grid item key={uuid} xs={12} sm={6} md={4}>
                        <div>
                            <Skeleton variant="rect" width={300} height={300} />
                            <Skeleton variant="text" width={200} />
                            <Skeleton variant="text" width={250} />
                        </div>
                    </Grid>
                    <Grid item key={uuid} xs={12} sm={6} md={4}>
                        <div>
                            <Skeleton variant="rect" width={300} height={300} />
                            <Skeleton variant="text" width={200} />
                            <Skeleton variant="text" width={250} />
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default ProductsLoader;
