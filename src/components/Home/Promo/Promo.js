import React, { Component } from 'react';

import PromoProducto from './PromoProducto/Promo_Producto';
import PromoContador from './PromoContador/PromoContador';

const promoList = (productos) => {
    return productos.map(p => {
        return <PromoProducto producto={p} key={p.id} />;
    });
};

class Promo extends Component {

    render() {
        return <section className="productosPromo container">
            <PromoContador></PromoContador>
            {promoList(this.props.promoProductos)}
        </section>;
    }
}

export default Promo;