import React, { Component } from "react";
import HijoDeportes from "./HijoDeportes";

export default class PadreDeportes extends Component {
    deportes = ["Futbol", "Baloncesto", "Tenis", "Beisbol"];

    state={
        favorito: ""
    }

    mostrarFavorito=(deporteSeleccionado) =>{
        this.setState({
            favorito:deporteSeleccionado
        })

    }
    render() {
        return (
            <>
                <div>Padre Deportes</div>
                  <h3 className="text-black-300">Su deporte Favorito es: {this.state.favorito}</h3>
                {this.deportes.map((deporte, index) => {
                    return <HijoDeportes key={index} nombre={deporte}  mostrarFavorito={this.mostrarFavorito}/>;
                })}
            </>
        );
    }
}
