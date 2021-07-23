import {Typography, Container, Grid} from '@material-ui/core'

function Subfooter() {
    return (
        <>
            <Container maxWidth="xl" style={{ padding: '1rem ' }}>
                <Grid container>
                    <Grid item xs={7}>
                        <Typography color="primary">
                            Copyright @2021 SINCON. All Rights Reserved.
                        </Typography>
                    </Grid>
                    <Grid item xs={5}>
                        <Typography align="right">
                            <Grid container>
                                <Grid item md={8}>
                                    <Typography color="primary">
                                        Terms and condition
                                    </Typography>
                                </Grid>
                                <Grid item md={4}>
                                    <Typography color="primary">
                                        Privacy Policy
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Subfooter
