import React from 'react';
import CountUp from 'react-countup';
// import deathImg from './../../img/d.jpg';
import './Card.css';

const Card = ({ data: { confirmed, recovered, active, deaths, lastupdatedtime } }) => {
    if (!confirmed) { return 'Loading...'; }

    return (
        <div className="container">

            <h1 className="hero"> Live Covid-19 tracker </h1>
            <h3 className="india"> India </h3>

            <div className="main">


                <div className="confirmed">
                    <h2 className="title">Confirmed</h2>
                    <h1 className="data-value">
                        <CountUp start={0} end={confirmed} duration={1.5} separator="," />
                    </h1>
                </div>

                <div className="recovered">
                    <h2 className="title">recovered</h2>
                    <h1 className="data-value">
                        <CountUp start={0} end={recovered} duration={1.5} separator="," />
                    </h1>
                </div>

                <div className="active">
                    <h2 className="title">active</h2>
                    <h1 className="data-value">
                        <CountUp start={0} end={active} duration={1.5} separator="," />
                    </h1>
                </div>

                <div className="deaths">
                    <h2 className="title">deaths</h2>
                    <h1 className="data-value">
                        <CountUp start={0} end={deaths} duration={1.5} separator="," />
                    </h1>
                </div>

            </div>

            <h2 className="lastUpdate"><span>Last Updated on: </span> {new Date(lastupdatedtime).toDateString()}</h2>
        </div>
    )
}



export default Card;