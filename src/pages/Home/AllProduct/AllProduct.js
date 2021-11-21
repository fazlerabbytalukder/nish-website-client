import React from 'react';
import { Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { useHistory } from 'react-router';

const AllProduct = (props) => {
    const { _id, productName, price, img, description } = props.product;
    const history = useHistory();

    const handleOrderClick = () => {
        history.push(`/order/${_id}`);
    }
    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ minWidth: 275, border: 0, boxShadow: 2 }}>
                <CardMedia
                    component="img"
                    image={img}
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="h5" component="div">
                        {productName}
                    </Typography>
                    <Typography style={{color:'#8A513D', fontSize:'30px'}} variant="h6" color="text.secondary">
                        ${price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description.slice(0,117)}
                    </Typography>
                </CardContent>
                <Button onClick={handleOrderClick} style={{width:'90%', backgroundColor:'#8A513D', marginBottom:'20px'}} variant="contained">Order Now</Button>
            </Card>
        </Grid>
    );
};

export default AllProduct;