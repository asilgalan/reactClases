import React, { Component } from "react";

export default class Comic extends Component {
    render() {
        const { comic, seleccionarFavorito, DeleteComic } = this.props;

        return (
            <div className="flex justify-center bg-gradient-to-br from-amber-100 to-green-300">
                <div className="max-w-sm text-center p-10 m-10   bg-white border border-gray-100 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                    <img className="w-full h-64 object-cover" src={comic.imagen} alt={comic.titulo} />
                    <div className="p-6">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-2">{comic.titulo}</h3>
                        <p className="text-gray-600 text-sm mb-4">{comic.descripcion}</p>
                        <button
                            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
                            onClick={() => seleccionarFavorito(comic)}
                        >
                            ⭐ Añadir a favorito
                        </button>

                        <button
                            className="bg-blue-500 text-white rounded py-2 px-4 m-2"
                            onClick={() => {
                                var index = parseInt(this.props.index);
                                DeleteComic(index);
                            }}
                        >
                            💥 Borrar Comics
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
