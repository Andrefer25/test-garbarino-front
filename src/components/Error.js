import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import gatoAstronauta from '../assets/img/image_404.JPG';

class Error extends Component {

    frasesError = [
        "la palta es un asco",
        "jugar en PC es mil veces mejor que en consola",
        "la nutella está sobrevalorada",
        "pepsi es más rica que la coca",
        "el fernet es un asco",
        "San Lorenzo está sobrevalorado"
    ]

    getFrase = () => {
        this.frasesError.sort(() => 0.5 - Math.random());
        return this.frasesError.slice(0, 1);
    }

    render() {
        return <section className="container">
            <div className="error404">
                <img src={gatoAstronauta} alt="" />
                <div className="textoError">
                    <h1>Página no encontrada</h1>
                    <h2>Como sabemos que no leerás esto salvo haciendo clic en alguna página que no existe, me puedo permitir el gusto de escribir cualquier cosa.</h2>
                    <h2>Por ejemplo: {this.getFrase()}.</h2>
                    <Link to = {"/"} style={{ textDecoration: 'none' }}>
                        <button>Volver al Inicio</button>
                    </Link>
                </div>
            </div>
        </section>
    }
}

export default Error;
