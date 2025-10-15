import React, { Component } from "react";
import HijoNumero from "./HijoNumero";

export default class PadreNumero extends Component {
    state = {
        suma: 0,
        listaNumero: [],
    };

    listadoNumero = () => {
        for (let i = 0; i < 3; i++) {
            var aleatorio = parseInt(Math.random() * 100) + 1;
            this.state.listaNumero.push(aleatorio);
            this.setState({
                listaNumero: this.state.listaNumero,
            });
        }
    };

    sumarNumero = numeroSumar => {
        var estadoActual = this.state.suma;

        this.setState({
            suma: numeroSumar + estadoActual,
        });
    };

    render() {
        return (
            <>
                <div>Padre Numero</div>
                <button className="bg-gradient-to-tl from-red-500 to-blue-50 p-10 m-10" onClick={this.listadoNumero}>
                    Generar numero
                </button>
                <h3 className="text-black-300">La suma es: {this.state.suma}</h3>
                {this.state.listaNumero.map((numero, index) => {
                    return <HijoNumero key={index} numero={numero} sumarNumero={this.sumarNumero} />;
                })}
            </>
        );
    }
}
