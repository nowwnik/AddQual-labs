import React from 'react';
import './Block.css';

const Block = (properties) => {
    return (
        <div class='block'>
            <img className='picture' src={properties.image} alt='art'/>
            <div class='block-header'>{properties.titleOfBlock}</div>
            <div class='block-text'>{properties.text}</div>
        </div>
    );
};

export default Block;
