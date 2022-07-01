import React, { useState } from 'react';
import './Item.css'

const Item = ({card}) => {
    const [showLogo, setShowLogo] =useState(true);
    const {name, img, options} = card;
  return (
    <div className='card' onClick={() => setShowLogo(!showLogo)}>
        {showLogo ? (
            <div>
            <img className='card-logo' src={img} alt="item-logo" />
            <h3 className='card-title'>{name}</h3>
        </div>
        ) : (
            <ul className='list'>
            {options.map((item, index) => {
                return <li key={index}>{item}</li>
            })}
        </ul>
        )}
    </div>
  )
}

export default Item