import React, { Component } from 'react';

import RecomendadoProducto from './RecomendadoProducto/RecomendadoProducto';

const recomendadoList = (productos) => {
    return productos.map(p => {
        return <RecomendadoProducto producto={p} key={p.id} />;
    });
};

class Recomendado extends Component {

    render() {
        return <section className="sugerencias container">
            <div className="sugerenciasText">
                <p>Quienes vieron este producto también vieron</p>
            </div>
            <div className="listaSugerencias">
                {recomendadoList(this.props.recomendadoProductos)}
            </div>
        </section>
    }
}

export default Recomendado;