import React, { Component } from 'react';

class PromoContador extends Component {

    state = {
        horas: null,
        minutos: null,
        segundos: null
    }

    componentDidMount() {
        this.interval = setInterval(()=>{
            this.getContador();
        },1000);
    }

    getContador = () => {
        var date = new Date();
        var minutos = 60 - date.getMinutes();
        var horas = (minutos === 60)? 24 - date.getHours() + 1 : 24 - date.getHours();
        var segundos = 60 - date.getSeconds();
        
        this.setState({
            horas: ((horas === 24)? "00": this.parseHoras(horas)),
            minutos: ((minutos === 60)? "00": this.parseHoras(minutos)),
            segundos: ((segundos === 60)? "00": this.parseHoras(segundos))
        });
    }

    parseHoras = (num) => {
        var numero = num.toString();
        return (numero.length > 1)? numero : "0"+numero; 
    }

    render() {
        return <div className="ofertas">
            <h3><strong>OFERTAS</strong> Destacadas</h3>
            <div className="horario">
                {this.state.horas !== null && this.state.minutos !== null && this.state.segundos !== null &&
                    <div>
                        <div className="hora">
                            <em className="hours">{this.state.horas}</em>
                        </div>
                        <div className="hora">
                            <em className="minutes">{this.state.minutos}</em>
                        </div>
                        <div className="hora">
                            <em className="seconds">{this.state.segundos}</em>
                        </div>
                    </div>
                }
            </div>
            <ul className="listaHora">
                <li>hs</li>
                <li>min</li>
                <li>seg</li>
            </ul>
            <button>VER TODAS</button>
        </div>;
    }
}

export default PromoContador;
