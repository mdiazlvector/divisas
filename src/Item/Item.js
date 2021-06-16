import React from 'react';

class Item extends React.Component {
    constructor (props) {
        super (props);

    }

    render() {
        return (
            <li> 
                {this.props.nombre}: {this.props.valor}
            </li>
        );
    }
}
export default Item;