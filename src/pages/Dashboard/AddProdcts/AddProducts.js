import React, { useState } from 'react';
import { Alert, Button, TextField, Typography } from '@mui/material';

const buttonDesign2 = {
    backgroundColor: '#8A513D',
    padding: '5px 10px',
    borderRadius:'3px'
}

const AddProducts = () => {
    const [product, setProducts] = useState({});
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field,value);

        const newProductData = { ...product };
        newProductData[field] = value;

        // console.log(newLoginData);
        setProducts(newProductData);
    }

    const handleProductSubmit = e => {
        const productInfo = {
            ...product,
        }

        //send data to the serer
        fetch('https://ancient-beyond-52818.herokuapp.com/products', {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify(productInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setSuccess(true);
                }
                // console.log(data);
            })
        
        e.preventDefault();
    }
    return (
        <>
            <Typography variant="h4" sx={{ mb: 2, fontWeight: 900, textAlign:'left', color:'#8A513D' }}>Add A Product</Typography>
            <form onSubmit={handleProductSubmit} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'left' }}>
                <TextField
                    id="outlined-basic"
                    label="Service Name"
                    required
                    onBlur={handleOnBlur}
                    name="productName"
                    sx={{ width: "50%", backgroundColor: "white", mb: 1 }} />
                <TextField
                    id="outlined-basic"
                    name="price"
                    type="number"
                    required
                    onBlur={handleOnBlur}
                    label="Price"
                    sx={{ width: "50%", backgroundColor: "white", mb: 1 }} />
                <TextField
                    id="outlined-basic"
                    name="img"
                    required
                    onBlur={handleOnBlur}
                    label="img-url"
                    sx={{ width: "50%", backgroundColor: "white", mb: 1 }} />
                <TextField
                    id="outlined-basic"
                    required
                    name="description"
                    onBlur={handleOnBlur}
                    label="Description"
                    sx={{ width: "50%", backgroundColor: "white", mb: 1 }} />
                <Button type="submit" style={{width:'50%',...buttonDesign2, color:'white', backgroundColor:'#8A513D'}}>Submit</Button>
            </form>
            {success && <Alert severity="success">Products Added Successfully</Alert>}
        </>
    );
};

export default AddProducts;