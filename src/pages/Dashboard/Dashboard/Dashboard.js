import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import { Button } from '@mui/material';
import MyOrders from '../MyOrders/MyOrders';
import Pay from '../Pay/Pay';
import AddReview from '../AddReview/AddReview';
import AddProducts from '../AddProdcts/AddProducts';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageProducts from '../ManageProducts/ManageProducts';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import useAuth from '../../../Hooks/useAuth';
import AdminRoute from '../../Login/Login/AdminRote/AminRoute';

const buttonDesign = {
    color: '#8A513D',
    padding: '5px 10px',
    textDecoration: 'none'
}

const drawerWidth = 200;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    //for handle dashboard name dynamic
    const [changeName, setChangeName] = React.useState('Dashboard');
    //admin non admin
    const { admin, user, logout } = useAuth();

    let { path, url } = useRouteMatch();

    //for handle dashboard name dynamic
    const handleNameChange = (e) => {
        setChangeName(e.target.innerText);
    }


    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <Link style={buttonDesign} to='/home'><Button color="inherit">Go to Home</Button></Link>
            {
                admin ?
                    <Box>
                        <Link onClick={handleNameChange} style={buttonDesign} to={`${url}/addproduct`}><Button color="inherit">Add Product</Button></Link>
                        <Link onClick={handleNameChange} style={buttonDesign} to={`${url}/makeAdmin`}><Button color="inherit">Make Admin</Button></Link>
                        <Link onClick={handleNameChange} style={buttonDesign} to={`${url}/manageProdct`}><Button color="inherit">Manage Product</Button></Link>
                        <Link onClick={handleNameChange} style={buttonDesign} to={`${url}/manageAllOrders`}><Button color="inherit">Manage All Orders</Button></Link>
                    </Box>
                    :
                    <Box>
                        <Link onClick={handleNameChange} style={buttonDesign} to={`${url}/myOrders`}><Button color="inherit">My Orders</Button></Link>
                        <Link onClick={handleNameChange} style={buttonDesign} to={`${url}/pay`}><Button color="inherit">Pay</Button></Link>
                        <Link onClick={handleNameChange} style={buttonDesign} to={`${url}/addreview`}><Button color="inherit">Add Review</Button></Link>
                    </Box>
            }
            <Button style={{ ...buttonDesign }} onClick={logout} color="inherit">Logout</Button>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                style={{ background: 'white' }}
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography style={{ color: '#8A513D' }} variant="h6" noWrap component="div">
                        {changeName}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
                    {
                        admin ? <AdminRoute exact  path={path}>
                        <AddProducts></AddProducts>
                    </AdminRoute> : <Route exact  path={path}>
                        <MyOrders></MyOrders>
                    </Route>
                    }
                    <Route path={`${path}/myOrders`}>
                        <MyOrders></MyOrders>
                    </Route>
                    <Route path={`${path}/pay`}>
                        <Pay></Pay>
                    </Route>
                    <Route path={`${path}/addreview`}>
                        <AddReview></AddReview>
                    </Route>
                    {/* admin part */}
                    <AdminRoute path={`${path}/addproduct`}>
                        <AddProducts></AddProducts>
                    </AdminRoute>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageProdct`}>
                        <ManageProducts></ManageProducts>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageAllOrders`}>
                        <ManageAllOrders></ManageAllOrders>
                    </AdminRoute>
                </Switch>
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;