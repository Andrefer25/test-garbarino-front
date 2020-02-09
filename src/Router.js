import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Producto from './components/Producto';
import Error from './components/Error';

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