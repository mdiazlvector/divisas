import React from 'react';
import './ListaDivisas.css';
import Divisa from "../divisa/divisa";

class ListaDivisas extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            divisas: [],
        }
    }

    componentDidMount() {
        this.getData();
    }

    getData() {
        const url = "https://api.frankfurter.app/latest";
        fetch(url)
            .then((respose) => respose.json())
            .then((data) => {
                console.log(data);

                this.setState({
                    divisas: data.rates,
                    fecha: this.convertirFecha(data.date),
                });
            })
    }

    convertirFecha (fechaCadena) {
        console.log(fechaCadena);
        const fechaNumber = Date.parse(fechaCadena);
        console.log("Unix:" + fechaNumber);
        const fecha = new Date(fechaNumber);
        console.log("ISO:" + fecha.toISOString());
        return `${fecha.getDate()}/${fecha.getMonth() + 1}/${fecha.getFullYear()}`;
    }

    render() {
        const divisas = this.state.divisas;
        const items = Object.keys(divisas).map((nombreDivisa) => {
            return <Divisa nombre={nombreDivisa} valor={divisas[nombreDivisa]} key={nombreDivisa}></Divisa>
        });
        return (
            <main className="listaDivisas">
                <h2>Fecha: {this.state.fecha}</h2>
                <ul>
                    { items }
                </ul>
            </main>
        );
    }
}

export default ListaDivisas;