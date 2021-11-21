import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Button, Container } from '@mui/material';
import bannerimg from '../../../images/wood-banner.png';
import { border } from '@mui/system';

const verticalCenter = {
    display: 'flex',
    alignItems: 'center'
}

const buttonDesign = {
    backgroundColor: '#8A513D',
    padding: '8px 10px',
    borderRadius: '3px',
    color: 'white'
}

const Banner = () => {
    return (
        <Container sx={{ flexGrow: 1, py: 2 }}>
            <Grid style={{ ...verticalCenter }} container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography style={{ textAlign: 'left', fontWeight: '600', size: '25px', color: '#8A513D' }} variant="h3" gutterBottom component="div">
                        FOR THE FANCY PEOPLE...
                    </Typography>

                    <Typography style={{ textAlign: 'left', fontWeight: '400', size: '16px', color: '#666666', margin: '30px 0' }} variant="body2" gutterBottom>
                        Find Wooden Jewelry and Wooden Accessories. Here you find the best quality Wooden Items at the lowest prices. I have a lots of unique things that you wont find anywhere else. So buy our product right now.
                    </Typography>
                    <Typography style={{ textAlign: 'left' }}>
                        <Button style={{ ...buttonDesign }} color="inherit">Buy Our Product</Button>
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ height:"100%", width:'100%'}} src={bannerimg} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Banner;