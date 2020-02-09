import React, { Component } from 'react';
import Axios from 'axios';
import Favicon from 'react-favicon';

import Logo from '../assets/img/favicon_app.png';

import Promo from './Promo';
import ListaProductos from './ListaProductos';

class Home extends Component {

  state = {
    products: [],
    status: null
  };

  componentWillMount() {
    this.getProductos();
  }

  getProductos = () => {
    Axios.get("http://localhost:8000/products").then(res => {
      this.setState({
        products: res.data.filter(prod => prod.enabled === true),
        status: 'success'
      })
    });
  }

  getPromoProductos = () => {
    var promoProductos = this.state.products.filter(prod => prod.discount > 0);
    promoProductos.sort(() => 0.5 - Math.random());
    return promoProductos.slice(0, 6);
  }

  render() {
    return <React.Fragment>
      <Favicon url={Logo}></Favicon>
      {(this.state.status === 'success') ?
        (<div>
          <Promo promoProductos={this.getPromoProductos()}></Promo>
          <ListaProductos productos={this.state.products} />
        </div>) :
        (<section className="loading container"><div className="loadingAnimation"></div></section>)
      }
    </React.Fragment>;
  }
}

export default Home;
