import React from 'react';
import './Grid.css';

const GridItem = (props) => {
    return (
        <div className="gridItem">
            <h3>{props.item.title}</h3>
            <p>{props.item.description}</p>
            <div>
                <button>Hot</button>
                <button>Standard</button>
            </div>
        </div>
    )
}

export default GridItem;