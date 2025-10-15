import React, { Component } from "react";

export default class DibujosComplejos extends Component {
    dibujarNumeros = () => {
        let lista = [];
        for (let i = 0; i < 7; i++) {
            var numero = parseInt(Math.random() * 100) + 1;
            lista.push(<li key={i}>{numero}</li>);
        }
        return lista;
    };
    render() {
        return (
            <>
                <div className="color-red p-5 m-4 w-auto h-full text-center bg-green-500">Dibujos Dinamicos react</div>
                <ul className="list-disc text-center">{this.dibujarNumeros()}</ul>
            </>
        );
    }
}
