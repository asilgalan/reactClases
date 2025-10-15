import React, { Component } from "react";

export default class HijoNumero extends Component {
    sumando = () => {
        var numero = this.props.numero;

        this.props.sumarNumero(numero);
    };
    render() {
        return (
            <>
                <h3>El numero es: {this.props.numero}</h3>
                <button className="bg-gradient-to-bl from-amber-400 to-blue-300 text-2xl w-auto p-3 m-3" onClick={this.sumando}>
                    {this.props.numero}
                </button>
            </>
        );
    }
}
