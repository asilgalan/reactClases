import React, { Component } from "react";

export default class HijoDeportes extends Component {
    mostrarFavorito = () => {
        var deporte = this.props.nombre;

        this.props.mostrarFavorito(deporte);
    };
    render() {
        return (
            <>
                <h3 className="text-blue-500">Deporte: {this.props.nombre}</h3>
                <button
                    onClick={() => {
                        this.mostrarFavorito();
                    }}
                    className="bg-gradient-to-bl from-green-400 to-red-400 text-5xl p-3 m-2"
                >
                    Seleccionar Favorito
                </button>
            </>
        );
    }
}
