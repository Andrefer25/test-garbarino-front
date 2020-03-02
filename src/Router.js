import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Producto from './components/Producto/Producto';
import Error from './components/Error/Error';

class Router extends Component {

    render() {
        return (
            <BrowserRouter>
                <Navbar></Navbar>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/productos/:idProducto" component={Producto} />

                    <Route component={Error} />
                </Switch>
                <Footer></Footer>
            </BrowserRouter>
        );
    }

}

export default Router;