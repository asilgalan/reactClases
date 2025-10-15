const { Component } = require("react");

function metodoAbsurdo() {
    console.log("Metodo sin funcionalidad");
}
class Contador extends Component {
    numero = 1;

    state = {
        valor: parseInt(this.props.inicio),
    };

    incrementarNumero = () => {
        this.numero += 1;
        console.log("valor del Número:" + this.numero);
    };
    incrementarValor = () => {
        this.setState({
            valor: this.state.valor + 1,
        });
    };
    render() {
        return (
            <>
                <h1 className="color-red">Ejemplo Contador jsx {this.props.inicio}</h1>

                <h3>Valor:{this.props.inicio}</h3>
                <button className="bg-blue-700 p-3 m-3" onClick={this.incrementarValor}>
                    incrementar Valor
                </button>
                <button className="bg-blue-700 p-3 m-3" onClick={this.incrementarNumero}>
                    incrementar
                </button>
                <button
                    onClick={() => {
                        metodoAbsurdo();
                        this.incrementarNumero();
                    }}
                >
                    para nada
                </button>
            </>
        );
    }
}

export default Contador;
