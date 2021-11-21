import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import ManageProduct from '../ManageProduct/ManageProduct';

const ManageProducts = () => {
    const [products, setProdcts] = useState([]);

    useEffect(() => {
        fetch('https://ancient-beyond-52818.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProdcts(data));
    }, [])

    //handle delete
    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://ancient-beyond-52818.herokuapp.com/products/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingOrder = products.filter(user => user._id !== id);
                        setProdcts(remainingOrder);
                        // window.reload();
                    }
                });
        }
    }

    return (
        <Container>
            <Typography style={{ fontWeight: '700', size: '35px', margin: '25px 0' }} variant="h4" gutterBottom component="div">
                Our Awesome <span style={{ color: '#8A513D' }}>Products</span>
            </Typography>
            <Box style={{margin:'50px 0', alignItems:'center'}}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        products.map(product => <ManageProduct
                            key={product._id}
                            product={product}
                            handleDelete={handleDelete}
                        ></ManageProduct>)
                    }
                </Grid>
            </Box>
        </Container>
    );
};

export default ManageProducts;