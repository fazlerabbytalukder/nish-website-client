import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import logo from '../../../images/logo (1).png';


const footerBg = {
    backgroundColor: "#8A513D",
}
const footerBg2 = {
    backgroundColor: "#743b26",
}

const Footer = () => {
    return (
        <div>
            <Box style={footerBg}>
                <Container sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={3}>
                            <Box style={{ textAlign: 'left', display: 'flex', justyfyContent: 'center', alignItems: 'center' }}>
                                <img style={{ width: "40px" }} src={logo} alt="" />
                                <Typography style={{ fontWeight: 'bolder' }} variant='h5'>
                                    OVILASHI
                                </Typography>
                            </Box>
                            <Typography variant='h5' sx={{ textAlign: 'left', my: 2, fontWeight: 500, color: 'white' }}>
                                About Website
                            </Typography>
                            <Typography variant='h6' sx={{ my: 2, fontSize: 14, color: '#bbbaba', fontWeight: 300, textAlign: 'left' }}>
                                This is a wooden ornament and wooden related prodct website. Here you can Buy your unique product with very low cost. Both Female and male product we have in our Stook. If you send us a design we also make those product in 5 working days.
                            </Typography>
                        </Grid>


                        <Grid style={{ textAlign: 'center' }} item xs={12} md={3}>
                            <Typography variant='h5' sx={{ textAlign: 'left', my: 2, fontWeight: 500, color: 'white', mt:7.5 }}>
                                Services We Provide
                            </Typography>
                            <Typography variant='h6' sx={{ textAlign: 'left', my: 2, fontSize: 14, color: '#bbbaba', fontWeight: 300 }}>
                                Wooden Unique Product
                            </Typography>
                            <Typography variant='h6' sx={{ textAlign: 'left', my: 2, fontSize: 14, color: '#bbbaba', fontWeight: 300 }}>
                                Low and Quality Product
                            </Typography>
                            <Typography variant='h6' sx={{ textAlign: 'left', my: 2, fontSize: 14, color: '#bbbaba', fontWeight: 300 }}>
                                Fastest Delivary Product
                            </Typography>
                            <Typography variant='h6' sx={{ textAlign: 'left', my: 2, fontSize: 14, color: '#bbbaba', fontWeight: 300 }}>
                                24 hours Customer Service
                            </Typography>
                            <Typography variant='h6' sx={{ textAlign: 'left', my: 2, fontSize: 14, color: '#bbbaba', fontWeight: 300 }}>
                                Cash On Delivary Service
                            </Typography>
                        </Grid>


                        <Grid style={{ textAlign: 'center' }} item xs={12} md={3}>
                            <Typography variant='h5' sx={{ textAlign: 'left', my: 2, fontWeight: 500, color: 'white', mt:7.5 }}>
                                Usefull Links
                            </Typography>
                            <Typography variant='h6' sx={{ textAlign: 'left', my: 2, fontSize: 14, color: '#bbbaba', fontWeight: 300 }}>
                                About Us
                            </Typography>
                            <Typography variant='h6' sx={{ textAlign: 'left', my: 2, fontSize: 14, color: '#bbbaba', fontWeight: 300 }}>
                                Contact Us
                            </Typography>
                            <Typography variant='h6' sx={{ textAlign: 'left', my: 2, fontSize: 14, color: '#bbbaba', fontWeight: 300 }}>
                                Services
                            </Typography>
                            <Typography variant='h6' sx={{ textAlign: 'left', my: 2, fontSize: 14, color: '#bbbaba', fontWeight: 300 }}>
                                Terms & Condition
                            </Typography>
                        </Grid>


                        <Grid item xs={12} md={3}>
                            <Box style={{backgroundColor:'#743B26', padding:'10px', borderRadius:'50px 0 50px 0', marginTop:'60px' }}>
                                <Typography variant='h5' sx={{ my: 2, fontSize: 20, fontWeight: 500, textAlign: 'left', color: 'white',marginLeft:'20px' }}>
                                    <i class="fas fa-map-marked-alt fa-2x"></i> Our Address
                                </Typography>
                                <Typography variant='h6' sx={{ my: 2, fontSize: 14, color: '#bbbaba', fontWeight: 300, textAlign: 'left',marginLeft:'20px' }}>
                                    Dhanmondi 32, Dhaka, Bangladesh
                                </Typography>
                            </Box>
                            <Typography variant='h6' sx={{ my: 2, fontSize: 14, color: 'white', fontWeight: 300, textAlign: 'left' }}>
                                <i style={{ marginRight: '20px' }} class="fab fa-facebook fa-2x"></i>
                                <i style={{ marginRight: '20px' }} class="fab fa-instagram fa-2x"></i>
                                <i style={{ marginRight: '20px' }} class="fab fa-whatsapp fa-2x"></i>
                                <i style={{ marginRight: '20px' }} class="fab fa-pinterest fa-2x"></i>
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
                <Box style={footerBg2}>
                    <Typography variant='h6' sx={{ py: 1, fontSize: 14, color: 'white', fontWeight: 300, textAlign: 'center' }}>
                        All Copy Right &copy; received ovilashi.com 2021
                    </Typography>
                </Box>
            </Box>
        </div>
    );
};

export default Footer;