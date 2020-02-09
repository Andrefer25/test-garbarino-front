import React, { Component } from 'react';
import logoGarbarino from '../assets/img/logo-garbarino.svg';
import lupa from '../assets/img/lupa-buscador.svg';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  
  render() {
    return <nav>
      <div className="altnavbar">
        <div className="container altnav">
          <ul className="altnav-list">
            <li>Créditos y Tarjetas</li>
            <li>Ventas a Empresas</li>
            <li>Seguros</li>
            <li>Lista de Regalos</li>
            <li>Logística</li>
            <li>Viajes</li>
          </ul>
        </div>
      </div>
      <div className="princnavbar">
        <div className="container navbar">
          <div className="nav-grid">
            <Link to = {"/"} style={{ textDecoration: 'none' }}>
              <div className="logo"><img src={logoGarbarino} alt="Garbarino" /></div>
            </Link>
            <div className="buscador">
              <input type="text" placeholder="Buscá productos, categorías, marcas ..." />
              <button className="buscadorBoton">
                <img src={lupa} alt="buscar" />
              </button>
            </div>
            <div className="promoCuotas">
              <p>Todos los Aires en 18 sin interés <span role="img" aria-label="fuego">🔥</span></p>
            </div>
          </div>
          <ul className="subnav-list">
            <li>Categorías</li>
            <li>18 cuotas sin interés</li>
            <li>Envio gratis</li>
            <li>Beneficio Anses</li>
          </ul>
        </div>
      </div></nav>
  }
}

export default Navbar;
