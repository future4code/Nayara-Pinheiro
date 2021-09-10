import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="littlecard-container">
             <div>
                <p className="titulo">{ props.email }{props.enderecoEmail}</p> 
                <p className="titulo">{ props.endereco }</p>
            </div>
        </div>
    )
}

export default CardPequeno;