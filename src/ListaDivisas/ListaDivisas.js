import React from 'react';

class ListaDivisas extends React.Component {
constructor(props) {
    super(props);

    this.state = {
        listadoVisible: true,
        divisas: {},
        date: '',
        }

        this.cambiaVisibilidadLista = this.cambiaVisibilidadLista.bind(this);
    }

    componentDidMount() {

        const url = 'https://api.frankfurter.app/latest';
        fetch(url)
            .then((response ) => response.json())
            .then((data) => {
                this.setState({
                    divisas: data.rates,
                    date: data.date,
                })
            })
    }
    cambiaVisibilidadLista(event) {
        const esVisible = this.state.listadoVisible;
        this.setState( {
            listadoVisible: !esVisible
        })
    }

    render(){
        let listado;
        if (this.state.listadoVisible) {
            const items = Object.keys(this.state.divisas).map((key) => {
                return <li key={key}>{key}: {this.state.divisas[key]}</li>
            })
            listado = <div><h2>Listado de divisas</h2><ul>{items}</ul></div>
        }
        return(
            <div>
            <h1>
                Hola, {this.props.nombre}
            </h1>
                <h2>{this.state.date}</h2>
            <button onClick={this.cambiaVisibilidadLista}>Ver listado</button>
                { listado }
            </div>
            )
    }
}
export default ListaDivisas;

