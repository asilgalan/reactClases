import React, { Component } from "react";

export default class DibujosComplejosRender extends Component {
    state = {
        nombre: ["Lucia", "Asil", "Pepe", "Alfonso", "Lucas"],
    };

    generarNombre = () => {
        this.state.nombre.push("Nombre");

        this.setState({
            nombre: this.state.nombre,
        });
    };
    render() {
        return (
            <>
                <div className="bg-gradient-to-r from-violet-200 to-violet-700 text-black text-5xl text-center p-4">Dibujos Complejo Render</div>
                <button onClick={this.generarNombre} className="bg-gradient-to-b from-blue-500 to-violet-400 text-white p-5 m-4 text-center flex justify-center">
                    {" "}
                    Add Nombre
                </button>
                {this.state.nombre.map((nombre, index) => {
                    return (
                        <h3 className="text-blue-600 text-center" key={index}>
                            {nombre}
                        </h3>
                    );
                })}
            </>
        );
    }
}
