import React, { Component } from 'react';

import ItemProducto from './ItemProducto/ItemProducto';

const productosList = (productos) => {
    return productos.map(p => {
        return <ItemProducto producto={p} key={p.id} />;
    });
};

class ListaProductos extends Component {
    render() {
        return <div className="listaProductos container">
            {productosList(this.props.productos)}
        </div>;
    }
}

export default ListaProductos;
