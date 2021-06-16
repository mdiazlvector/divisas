import React from 'react';
import './divisa.css';

class Divisa extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li className="divisa">
                <strong>{this.props.nombre}</strong>: {this.props.valor} €
            </li>
        );
    }
}

export default Divisa;