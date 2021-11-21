import React, { useEffect, useState } from 'react';
import { Alert, Button, TextField, Typography } from '@mui/material';
import useAuth from '../../../Hooks/useAuth';
import { useParams } from 'react-router';
import Navigation from '../../Shared/Navigation/Navigation';


const buttonDesign2 = {
    backgroundColor: '#F63E7B',
    padding: '5px 10px',
    borderRadius:'3px'
}

const Order = () => {
    const { user } = useAuth();
    const [orderSuccess, setorderSuccess] = useState(false);

    const initialInfo = {yourName:user.displayName, email:user.email}
    const [orderInfo, setOrderInfo] = useState(initialInfo)

    const [order, setOrder] =useState([]);
    const { orderId } = useParams();
    useEffect(() => {
        fetch(`https://ancient-beyond-52818.herokuapp.com/products/${orderId}`)
            .then(res => res.json())
            .then(data => setOrder(data));
    }, [orderId])

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;

        const newInfo = { ...orderInfo };
        newInfo[field] = value;
        // console.log(newInfo);
        setOrderInfo(newInfo);
    }

    const handleOrderSubmit = e => {
        const productOrder = {
            ...orderInfo,
            serviceName: order.productName,
            price:order.price,
            img: order.img,
            description: order.details,
            status:'pending'
        }
        // console.log(booking);

        //send data to the serer
        fetch('https://ancient-beyond-52818.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify(productOrder)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setorderSuccess(true);
            }
        })
    
        e.preventDefault();
    }
    return (
        <>
            <Navigation></Navigation>
            <Typography variant="h4" sx={{ my: 4, fontWeight: 600, textAlign: 'Center', color:'#8A513D' }}>Please Confirm Your Order</Typography>
            <form onSubmit={handleOrderSubmit} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center',alignItems:'center' }}>
                <TextField
                    id="outlined-basic"
                    defaultValue={user.email}
                    onBlur={handleOnBlur}
                    name="email"
                    sx={{ width: "50%", backgroundColor: "white", mb: 1 }} />
                <TextField
                    id="outlined-basic"
                    name="yourName"
                    onBlur={handleOnBlur}
                    defaultValue={user.displayName}
                    sx={{ width: "50%", backgroundColor: "white", mb: 1 }} />
                <TextField
                    id="outlined-basic"
                    name="address"
                    onBlur={handleOnBlur}
                    label="Your Address"
                    sx={{ width: "50%", backgroundColor: "white", mb: 1 }} />
                <TextField
                    id="outlined-basic"
                    name="phone"
                    type="number"
                    onBlur={handleOnBlur}
                    label="Your Number"
                    sx={{ width: "50%", backgroundColor: "white", mb: 1 }} />
                <TextField
                    id="outlined-basic"
                    disabled
                    value={order.productName}
                    sx={{ width: "50%", backgroundColor: "white", mb: 1 }} />
                {orderSuccess && <Alert style={{width:'50%', margin:"5px 0"}} severity="success">Booking Successfull</Alert>}
                <Button type="submit" style={{width:'50%',...buttonDesign2, color:'white', backgroundColor:'#8A513D'}}>Book Now</Button>
            </form>
        </>
    );
};

export default Order;