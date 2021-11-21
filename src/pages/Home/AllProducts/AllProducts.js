import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import AllProduct from '../AllProduct/AllProduct';
import Navigation from '../../Shared/Navigation/Navigation';
import { Box } from '@mui/system';

const AllProducts = () => {
    const [products, setProdcts] = useState([]);

    useEffect(() => {
        fetch('https://ancient-beyond-52818.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProdcts(data));
    }, [])
    return (
        <Container>
            <Navigation></Navigation>
            <Typography style={{ fontWeight: '700', size: '35px', margin: '25px 0' }} variant="h4" gutterBottom component="div">
                Our Awesome <span style={{ color: '#8A513D' }}>Products</span>
            </Typography>
            <Box style={{margin:'50px 0'}}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        products.map(product => <AllProduct
                            key={product._id}
                            product={product}
                        ></AllProduct>)
                    }
                </Grid>
            </Box>
        </Container>
    );
};

export default AllProducts;