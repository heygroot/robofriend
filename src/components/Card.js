import React from 'react';
import './Card.css';

function Card({id, name, email}) {
    return (
        <div className='card robo shadow width' >
            <img style={{width: '12rem', height: '12rem'}}src={`https://robohash.org/${name}.png?size=200x200`} alt={`robot`}/>
            <div className='mt-3'>
                <h3>{name}</h3>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;