import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ItemProducto extends Component {
    render() {
        return <Link to={"/productos/" + this.props.producto.id} style={{ textDecoration: 'none' }}>
            <div className="productoItem">
                <div className="imagen">
                    <img src={this.props.producto.image_url} alt={this.props.producto.description} />
                </div>
                <div className="precioNombre">
                    <div className="precio">
                        <span className="precioOferta">${this.props.producto.price}</span>
                        {(this.props.producto.discount) > 0 &&
                            <span className="precioLista">
                                <del>${this.props.producto.list_price}</del>
                                <span className="descuento">{this.props.producto.discount}% OFF</span>
                            </span>
                        }
                    </div>
                    <h3 className="nombre">{this.props.producto.description}</h3>
                </div>
            </div>
        </Link>;
    }
}

export default ItemProducto;
