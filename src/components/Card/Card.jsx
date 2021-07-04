import React from 'react';
import deathImg from './../../img/d.jpg';
import './Card.css';

const Card = ({ data: { confirmed, recovered, active, deaths, lastupdatedtime } }) => {
    if (!confirmed) { return 'Loading...'; }

    return (
        <div className="container">
            <div className="main">
                <div className="confirmed">confirmed: {confirmed}</div>
                <div className="recovered">recovered: {recovered}</div>
                <div className="active">active: {active}</div>
                <div className="deaths">
                    <img className="d-img" src={deathImg} alt="img" />
                    deaths: {deaths}
                </div>
            </div>
        </div>
    )
}


export default Card;