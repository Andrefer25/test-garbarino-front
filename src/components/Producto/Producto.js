import React, { Component } from 'react';
import Axios from 'axios';
import Favicon from 'react-favicon';

import Logo from '../assets/img/favicon_app.png';

import ProductoDetalle from './ProductoDetalle/ProductoDetalle';
import Recomendado from './Recomendado/Recomendado';

class Producto extends Component {

    state = {
        products: [],
        status: null
    };

    componentWillMount() {
        this.getProductos();
    }

    getParamsId() {
        const { match: { params } } = this.props;

        return params.idProducto;
    }

    getProductos = () => {
        console.log()
        Axios.get("http://localhost:8000/products").then(res => {
            this.setState({
                products: res.data.filter(prod => prod.enabled === true),
                status: 'success'
            })
        });
    }

    getRecomendProductos = () => {
        this.state.products.sort(() => 0.5 - Math.random());
        var recomendados = this.state.products.filter(prod => prod.id !== this.getParamsId());
        return recomendados.slice(0, 5);
    }

    render() {

        return <React.Fragment>
            <Favicon url={Logo}></Favicon>
            <ProductoDetalle idProducto={this.getParamsId()}/>
            <Recomendado recomendadoProductos={this.getRecomendProductos()}/>
        </React.Fragment>
    }
}

export default Producto;
