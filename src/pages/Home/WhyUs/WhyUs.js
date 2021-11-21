import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Container } from '@mui/material';
import Card from '@mui/material/Card';
import w7 from '../../../images/w7.jpg';
import w6 from '../../../images/w6.jpg';
import w5 from '../../../images/w5.jpg';
import w4 from '../../../images/w4.jpg';

const background = {
    backgroundColor: 'white',
    padding:'10px 0'
}

const WhyUs = () => {
    return (
        <Box style={background}>
            <Container>
            <Typography style={{ fontWeight: 600, color: '#743b26', textAlign: 'center', margin: '30px 0' }} gutterBottom variant="h3" component="div">
                    Why Us
                </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={3}>
                            <Card sx={{ maxWidth: 345, height: 320 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={w5}
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography style={{ textAlign: "left" }} gutterBottom variant="h5" component="div">
                                            24/7 Hours Open
                                        </Typography>
                                        <Typography style={{ textAlign: "left" }} variant="body2" color="text.secondary">
                                            Check Inventory updates and order ststus in real time.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Card sx={{ maxWidth: 345, height: 320 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={w7}
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography style={{ textAlign: "left" }} gutterBottom variant="h5" component="div">
                                            Worldwide Delivary
                                        </Typography>
                                        <Typography style={{ textAlign: "left" }} variant="body2" color="text.secondary">
                                            200+ Distribution Channels in 30 different Contries
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Card sx={{ maxWidth: 345, height: 320 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={w4}
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography style={{ textAlign: "left" }} gutterBottom variant="h5" component="div">
                                            Marketing Support
                                        </Typography>
                                        <Typography style={{ textAlign: "left" }} variant="body2" color="text.secondary">
                                            Strategic Partnership with brand Companies / 200 wood company with us.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Card sx={{ maxWidth: 345, height: 320 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={w6}
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography style={{ textAlign: "left" }} gutterBottom variant="h5" component="div">
                                            Language we Prefer
                                        </Typography>
                                        <Typography style={{ textAlign: "left" }} variant="body2" color="text.secondary">
                                            English, Bangla, Chinese, Spanish, Italian
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
                </Box>
    );
};

export default WhyUs;