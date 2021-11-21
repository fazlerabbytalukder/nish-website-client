import React, { useEffect, useState } from 'react';
import { Button, Container, Grid, Typography } from '@mui/material';
import Product from '../Product/Product';
import { Link } from 'react-router-dom';
import { Box } from '@mui/system';

const Products = () => {
    const [products, setProdcts] = useState([]);

    useEffect(() => {
        fetch('https://ancient-beyond-52818.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProdcts(data));
    }, [])
    return (
        <Container>
            <Typography style={{ fontWeight: '700', size: '35px', margin: '25px 0' }} variant="h4" gutterBottom component="div">
                Our Awesome <span style={{ color: '#8A513D' }}>Products</span>
            </Typography>
            <Box style={{margin:'50px 0', alignItems:'center'}}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        products.slice(0,6).map(product => <Product
                            key={product._id}
                            product={product}
                        ></Product>)
                    }
                </Grid>
            </Box>
            <Link style={{textDecoration:'none'}} to='/allProducts'><Button style={{backgroundColor:'#8A513D',marginBottom:'30px'}} variant='contained'>More Products</Button></Link>
        </Container>
    );
};

export default Products;