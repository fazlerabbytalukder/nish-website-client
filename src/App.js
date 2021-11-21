import './App.css';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import PrivateRoute from './pages/Login/Login/PrivateRoute/PrivateRoute';
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import AllProducts from './pages/Home/AllProducts/AllProducts';
import Order from './pages/Home/Order/Order';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <PrivateRoute path='/dashboard'>
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute path='/order/:orderId'>
              <Order></Order>
            </PrivateRoute>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/allProducts'>
              <AllProducts></AllProducts>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
