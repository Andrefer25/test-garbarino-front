import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import Axios from 'axios';

class ProductoDetalle extends Component {

    state = {
        producto: [],
        status: null
    };

    componentWillMount() {
        this.getProduct(this.props);
    }

    componentWillReceiveProps(next_props) {
        this.setState({ status: null, producto: [] });
        this.getProduct(next_props);
    }

    componentWillUnmount() {
        document.title = "Garbarino - Tecnología, Electrodomésticos y Artículos para el hogar";
    }   

    getProduct = (props) => {
        Axios.get(`http://localhost:8000/products/${props.idProducto}`).then(res => {
            this.setState({
                producto: res.data,
                status: "success"
            });
            document.title = this.state.producto.description;
        }).catch((error) => {
            console.log(error.config);
            this.setState({
                producto: [],
                status: "error"
            });
        });
    }

    render() {

        return <React.Fragment>
            {this.state.status === "error" &&
                <Redirect to="/404" />
            }
            {this.state.status === "success" && this.state ? (
                <section className="producto container">
                    <div className="imagenYNombre">
                        <div className="nombreProducto">
                            {this.state.producto.description}
                        </div>
                        <div className="imagenProducto">
                            <div className="imagenBox">
                                <img src={this.state.producto.main_image.url} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="precioYCuotas">
                        <div className="precio">
                            <span className="precioOferta">${this.state.producto.price}</span>
                            {(this.state.producto.discount) > 0 &&
                                <span className="precioLista">
                                    <del>${this.state.producto.list_price}</del>
                                    <span className="descuento">{this.state.producto.discount}% OFF</span>
                                </span>
                            }
                        </div>
                        <div className="categoria">{this.state.producto.category}</div>
                        <div className="descripcion">{this.state.producto.summary}</div>
                        <div className="descripcionBeneficios">{this.state.producto.preferred_installment.description}</div>
                        {this.state.producto.enabled_for_sale ? (
                            <button className="botonComprar">COMPRAR</button>
                        ) : (
                                <button className="botonDeshabilitado">NO DISPONIBLE</button>
                            )}
                    </div>
                </section>) : (<section className="loading container"><div className="loadingAnimation"></div></section>)
            }
        </React.Fragment>
    }
}

export default ProductoDetalle;